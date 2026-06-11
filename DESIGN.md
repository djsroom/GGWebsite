Green GLASS Design System (design.md)
1. Overview


Theme: WordPress 'Sydney' theme (by aThemes)

Framework: Bootstrap (Grid layout applied)

Icon Libraries: FontAwesome 4.1.0, Dashicons
2. Color Palette
Key color values extracted from inline CSS and applied classes.
CategoryColor Code (Hex/RGBA)Application AreaPrimary Text#767676Default body text colorSecondary Text#666666Footer area text and linksHighlight (Hover)#d65050Hover color for main navigation linksAccent Blue#266289Additional description text (<small>) inside box components (.soft)White#ffffffSite title/description, navigation links, slider textBackground 1#000000Header background on mobile resolutions, header image overlayBackground 2rgba(0,0,0,0.9)Translucent background for the floating header on scrollBackground 3#1c1c1cMain sub-menu background, site footer backgroundBackground 4#252525Footer widgets area background
3. Typography
Two primary font families are loaded and used via Google Fonts.


Headings/Primary: Source Sans Pro (Weights: 400, 400italic, 600)

Body/Secondary: Raleway (Weights: 400, 500, 600)
Font Size Rules by Tag


Body Text: 14px

Main Site Title (.site-title): 32px

Site Description (.site-description): 16px

Main Menu Links: 14px

H1: 52px

H2: 42px

H3: 32px

H4: 25px

H5: 20px

H6: 18px
4. Layout & Spacing


Grid System: Utilizes Bootstrap's .container, .row, and responsive 12-column structure (e.g., .col-md-4, .col-sm-8, .col-xs-12).

Mobile Breakpoint: At screen widths of 1024px or below, the header transitions to a mobile layout (solid black background).

Key Spacing Rules:


Page Body Wrapper (.page-wrap): Top padding 83px, bottom padding 80px.

Header Background Image (.header-image): Fixed height of 300px, scaled to fit (background-size: cover).
5. UI Components


Box Elements (.soft):


Border-radius: 2px

Box-shadow: 3px 3px 5px #888888 (adds visual depth)

Spacing: Margin 20px 20px 20px 10px, Padding 10px 20px 1px 0px

Preloader: Displays a loading animation using .spinner and two bouncing elements (.pre-bounce1, .pre-bounce2) upon entering the page.

Main Hero Slider (.sydney-hero-area):


Centers text (.text-slider) and a call-to-action button (.roll-button.button-slider) over a background image.

Applies a fade-in animation (animated fadeInRightBig) to the text elements.