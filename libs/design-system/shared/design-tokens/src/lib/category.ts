// Color
export type color = string;
/* 
    Primary palette 
        - brand colors(talk with a brand), 
        - neutrals - add a few dark grays and a few light grays; avoid medium grays
        - interactive blue colors - choose an accessible one
        - tints & shades - Stack available per color in each hue, and treat the stack as a visualization
        - how to: 0 to 100 based on HSL' lightness like color-gray-05 or -90
        - offer only handful of options (like 400 to 900 not all from 0 to 900); avoid tedious variety
        - avoid functionally transformed colors; instead go with hand-picked ones.

    Secondary palette
        - Feedback colors - green, yellow, red, and blue.
        - Reveal the range of themes and allowable theme colors in certain contexts.
        - use https://contrast-finder.tanaguru.com/ for accessible color choices.
        - Solve the Reverse Light on Dark and Dark on Light
*/
// Font
export type font = string; // alias type, typography, and text
/* 
    Body text - S, M, L
    Text color - primary, secondary, interactive, disabled, error.
    Heading.
    Line height, alignment, letter-spacing, text-transform.
    Responsive - heading size increase dramatically; body text slowly.
     reset typography values before creation.
*/

// Size
export type size = string; //alias sizing
/* 
    Button size stabilize, other elements follow suit.
    Unify typography - S, M, L
    Unify space using space types.
    Not Every Component Needs Every Size.
    Type Hierarchy ≠ Size | Varies an element’s heading level for each size offered
    Mix and Match Sizes During Composition - like a button with icon 
*/

// Space
export type space = string; // alias units, dimension, and spacing
/* 
    Size ≠ space, so consider using proportion instead of t-shirts for space
    Grid ≠ Space. Grid is a Component, Using Space.
    2, 4, 8, 16, 32, 64
    linear increments like 2,4,6,8 wont work
    non-linear like golden-ratio, modular-scale and geometric-progression which double each step - 16, 32, and till 64 or 16, 8, ,4, 2
    1. space-inset (squared)
    2. space-squish-inset (less space at top and bottom than at left and right)
    3. space-stretch-inset (less space at left and right than at top and bottom)
    4. space-stack (one below another)
    5. space-inline (left to right)
    6. space-grid
 */

export type elevation = string; // alias z-index and layer(ing)
export type breakpoint = string; //alias media-query, responsive
export type shadow = string; // alias depth
export type touch = string;
export type time = string; // alias animation, transition and duration
export type border = string;
