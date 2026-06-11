import os
from PIL import Image

def process_logo():
    img_path = r"images\gg logo.png"
    if not os.path.exists(img_path):
        print("Logo not found at:", img_path)
        return

    # Open the image
    img = Image.open(img_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    # Create a new list for the transparent image data
    new_data = []
    for item in datas:
        # If the pixel is white (or very close to white), make it transparent
        # We can use a threshold like R > 240, G > 240, B > 240
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))  # Transparent
        else:
            new_data.append(item)

    img.putdata(new_data)
    
    # Save the transparent version of the full logo
    public_logo_path = r"public\logo.png"
    img.save(public_logo_path, "PNG")
    print("Saved transparent full logo to:", public_logo_path)

    # Let's also crop to just the symbol (building shapes on the left)
    # Let's find the bounding box of non-transparent pixels to locate the content
    bbox = img.getbbox()
    if bbox:
        print("Bounding box of non-transparent content:", bbox)
        # Let's find where the symbol ends. The symbol is on the left, and the text "Green Glass" is on the right.
        # Let's inspect the width of the image.
        width, height = img.size
        print(f"Image size: {width}x{height}")
        
        # We can crop the symbol. Typically, the symbol occupies the left part of the image.
        # Let's look at the symbol's horizontal range. In a typical horizontal logo, the emblem is in the left 30% or 35%.
        # Let's crop from bbox[0] to roughly 35% of the width (or bbox[0] + (bbox[2]-bbox[0]) * 0.35) and height from bbox[1] to bbox[3].
        # Let's analyze pixel density to find the gap between the symbol and the text.
        # A vertical column of transparent pixels (or near-transparent) separating the emblem and the text.
        
        # Let's find columns where there are very few or no solid pixels.
        solid_pixels_per_column = []
        for x in range(width):
            count = 0
            for y in range(height):
                pixel = img.getpixel((x, y))
                if pixel[3] > 0:  # non-transparent
                    count += 1
            solid_pixels_per_column.append(count)
            
        # The symbol is on the left, so solid_pixels_per_column will be > 0.
        # Then there will be a gap where solid_pixels_per_column is 0 (or very close to 0) before the text starts.
        # Let's find this gap.
        gap_start = 0
        gap_end = 0
        
        # Start scanning from left to right (after some solid pixels of the symbol)
        # Bounding box left is bbox[0]. Let's scan from bbox[0] + 50 to width.
        found_symbol_end = False
        for x in range(bbox[0] + 20, width):
            # Check if this column and next few columns are empty (gap)
            if all(solid_pixels_per_column[x + i] == 0 for i in range(min(10, width - x))):
                gap_start = x
                # Find where the gap ends (text starts)
                for x2 in range(gap_start, width):
                    if solid_pixels_per_column[x2] > 0:
                        gap_end = x2
                        break
                found_symbol_end = True
                break
                
        if found_symbol_end and gap_start > 0:
            print(f"Found gap between symbol and text at column {gap_start} to {gap_end}")
            # Crop to the symbol
            symbol_bbox = (bbox[0], bbox[1], gap_start, bbox[3])
            symbol_img = img.crop(symbol_bbox)
            
            # Save the symbol logo
            public_symbol_path = r"public\logo-symbol.png"
            symbol_img.save(public_symbol_path, "PNG")
            print("Saved transparent logo symbol to:", public_symbol_path)
        else:
            # If no gap found, crop to the left 33%
            print("Could not find distinct gap, cropping to left 33%")
            symbol_bbox = (bbox[0], bbox[1], bbox[0] + int((bbox[2] - bbox[0]) * 0.33), bbox[3])
            symbol_img = img.crop(symbol_bbox)
            public_symbol_path = r"public\logo-symbol.png"
            symbol_img.save(public_symbol_path, "PNG")
            print("Saved transparent logo symbol (fallback crop) to:", public_symbol_path)
            
if __name__ == "__main__":
    process_logo()
