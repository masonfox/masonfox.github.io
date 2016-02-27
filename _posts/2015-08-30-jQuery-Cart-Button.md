---
layout: post
title: jQuery Cart Button
feature-img: "img/blank.svg"
---

An animated jQuery Cart button!

My idea for this came from a couple things. First, I began working with jQuery extensively and I wanted to take more time to understand how animating/moving objects on events worked. Although this isn't really an animation per-say, since I am only adjusting margins, I feel as though it turned out well.

Secondly, I am in the process of redesigning a website for the company that I work for. It is a very large commerce site with a lot moving parts, one especially being the flow of products added to a cart. Although I wish I were able to implement something like this into the site I am working on, it does not really fit the scope of the project. But, I figured I'd make a pen to see if I could make it happen!

Here it is:

<p data-height="268" data-theme-id="0" data-slug-hash="WQedrq" data-default-tab="result" data-user="masonfox" class='codepen'>See the Pen <a href='http://codepen.io/masonfox/pen/WQedrq/'>Add to Cart Button Interaction</a> by Mason Fox (<a href='http://codepen.io/masonfox'>@masonfox</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script><div class="short-pad"></div>

I won't go into heavy detail on how I did this, as you can literally look at the markup and style, but I would like to talk about the jQuery, since I am still very new to it.

###The jQuery
There are only two functions total with numerous selectors:

####Function 1 - .add
.add is a div that holds the style for the stylized button that you initially see. It is green and has the "Add to Cart" text on it. .add is a child of the .button element, which contains all of the other elements. I needed to structure it this way so I could use overflow: hidden to move out and hide the other two buttons, checkout and continue.

.add is the .click event selector for many elements: the .checkout and .continue divs, showing the close button, which resets the animation, and also itself by changing its background to transparent. These changes were mostly accomplished via the .css event in jQuery. I also hid the close button on document load, but that is not within .add event, but rather above it so it executes first.

####Function 2 - .close
So the animation has completed upon clicking the .add button, but, well, we have to get it back to normal. Maybe someone decided they did not want to add that item to their cart, so I had to write it to reset itself. .close is the selector that controls this function. It will push everything back to where it was and also hide itself again. This then resets the whole animation to proceed again.

###Conclusion
I had a really fun time working on this pen! Although I know that there are many ways I could have made this better, for example, making it responsive, using widths and margins to "margin: 0 auto", the good 'ol classic centering technique to help solidify a centered structure, and more. But when it boils down to it, I had an idea in my mind and was able to execute it!
