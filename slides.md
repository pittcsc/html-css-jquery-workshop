# Web Development Wokshop

with normal person 

## JJ Naughton
(@vonbearshark)

Note: I did not make the flyers. Still, I have been doing this professionally for a few years now. I interned with PayPal over the summer, and I've worked with startups here in Pittsburgh, both in web development. This is intended to be a total-beginner's introduction. Please, stop me for any questions, or flag a volunteer if you're having any technical problems. Stop me if I glaze over anything important.

---

[https://github.com/Pitt-CSC/html-css-jquery-workshop](https://github.com/Pitt-CSC/html-css-jquery-workshop)

Note: Use this repository as a reference. You can follow along with the slides and notes in `slides.md`, access all links, and view the source, including the static assets.

---

## Step 0
- Download git and your choice static site server
or
- Download the repository zip, extract it, and use Dreamweaver
or
- Use GH:
    - Create a GH account and edit all code in the [online interface](https://github.com/) or download the [native GH desktop application](https://desktop.github.com/)
then:
    - Fork this repository, or create a repository, both preferably named: `yourusername.github.io`

Note: GitHub is a version control cloud; think Google Drive or Dopbox, but for code. Github will host all your files for your site, and will allow it to be accessed as a normal website via a url. If you don't know how to use it, don't worry about that now. If you fork the presentation repo into your own with your unique username, you will be able to edit the files, upload, etc. right from the web interface, all for free. If you're not familiar with git or the commandline, you should use the online interface or desktop client. That naming convention will ensure your site is your personal page, but you can also access your site as a project page with an arbitrary name.

----

## Deploying to GitHub
- Create a branch called `gh-pages`
- Ensure that branch is up to date with your working branch.
- You can visit your site at `username.github.io` or `username.github.io/projectname` for projects
- If your site files are in a subdirectory, append `/subdir` to the url

Note: This may be done on the online interface or from the commandline. That `gh-pages` name is important and that branch should not be deleted! It sometimes takes a few minutes for changes to propogate. You don't have to check all the time, but you might want to update this regularly to see your changes.

----

## Project Repo
- `/final` contains the final, finished project
-`/start` contains a good starting point
- `slides.md` contains the slides and notes
- `../assets` contains example static assets (pictures and video)

Note: I would reccommend moving all html, css, and js files to the base dir, but keeo your `/assets` subdir.You can reference the final product, but I would reccommend using the files in the start dir, and we'll build it from there. We might not finish the application exactly, and you might feel inclined to add your own information, but you can always reference the final product.

---

### Goals
- Basic understanding of the web.
- Learning:
    - HTML
    - CSS
    - jQuery

----

## Final Product

[http://pittcsc.org/html-css-jquery-workshop/final/](http://pittcsc.org/html-css-jquery-workshop/final/)

---

## Introduction to the Web
- The internet is just a connection of computers: clients and servers
- These computers can communicate on a platform called the World Wide Web
- Requests and responses are made with HTTP

Note: These interconnected computers can communicate in different ways, too. HTTP is simply a protocol for computers to communicate. It's similar to declaring a national langauge: everyone can communicate in different ways, but they elect, say, French, for government affairs.

----

## Servers and Clients
- Servers are just specialized computers
- Clients request information from a web address through the browser
- The browser simply recieves text files and static assets
- Then it renders pages based on the rules of HTML, CSS, JS

Note: All computers have addresses, like houses: your phone, your laptop, your ipad, etc. We use urls for convenience, but we could easily use the IP address to access sites. Without the browser, we would just recieve text and static assets, the browser allows us to visualize these text files based on certain predefined rules of HTML, CSS, and JavaScript. The browser knows what to expect thanks to HTTP. Not all browser clients use the exact same rules, although there is a general consensus among modern browsers.

----

## Example Communication
- Open up the [final product](http://pittcsc.org/html-css-jquery-workshop/final/)
- Open the dev tools in your browser and check out the network section
- Refresh the page

Note: For Firefox: ctrl + shift + i; for Chrome: ctrl + shift + j; for IE: Google "download Firefox", and that should solve your problems. This is a JSON object, this is the response that is returned for this web page when it is requested. As you can see, the browser takes the HTML, CSS, and JS in the response and renders a web page from that text request. You can also see all the static files served from the site. Check it out on other sites as well!

---

## HyperText Markup Language (HTML)
- Hypertext: text that links to other text
- Markup: Annotation of formatting
- HTML defines the semantical meaning of content.

Note: HTML is a lot like Russian dolls:just boxes within boxes. It's good practice to write the html with indentation to show the box relationships for readability. Whitespace is not taken into account for rendering; all pages are minified. HTML may be thought of as the skeleton. Pedantically, HTML and CSS are not programming languages. Again, because HTTP is just plaintext communication, you can edit these files in whatever editor you'd like; there's nothing special about them.

----

## The Document Object Model (DOM) Tree
- The DOM is the browsers concept of the HTML
- The DOM is represented as a tree of nested elements.
[The DOM Tree](http://www.w3schools.com/js/pic_htmltree.gif)

Note: The DOM Tree is just one way to think about the DOM, wherein elements have sibling branches, roots, etc. It might be helpful to think of it upside down. The DOM is just a concept, so you don't need to worry about it really, as long as you understand the structure of HTML elements. JavaScript can move the DOM around, but we'll see that later.

----

## Tags
- Many kinds of tags, or elements
- Tags have designated semantics--possible attributes, styles, and expectations--based on specification.
- Content goes between open `<tag>` and close `</tag>`tags.
- Tags should be lowercase

Note: We can open up final product and our dev tools again, navigate to Inspector, click the element picker, and hover over any element on the page to see that exact element and its code. Tags are semantic, and many tags come with their own style rules and expectations, but you can abuse them easily. For example, there's nothing stopping you from writing all your paragraphs in divs; it will still show up, but with unexpected results in rendering and Search Engine Optimization. Do not forget your closing tags! Some tags are self-closing, and contain no closing tag or inner content.

----

## Attributes
- Tags may also have attributes
- These are name-value pairs of traits associated with the tag
- For example, the `<img>` tag has the `src` attribute, which notes the image's source.
- Attriutes also include CSS selectors

Note: Some attributes, called Boolean attributes, only have the value, which is assumed to be true if designated. For example the `required` attribute for input elements. We won't see any in this project.

----

## `<head> Head </head>`
- Contains meta-information needed before the page renders.
- For example, a `<title>` tag declares the title of the web page in the browser
- Contains `<link>` and `<script>` tags for including external files, such as CSS and favicons
- Everything in the `head` is invisible

Note: These external links can come from the web or from your local site. For example, we are including Bootstrap and jQuery (which we will talk about later) from the web, but we have our personal CSS page included locally.

----

## `<body> Body </body>`
- Contains all content to be rendered on the page.
- The root element for every visual element.
- Like the `head` and `html` tag, there should only be one

Note: Do not confuse this with HTML5's `main` tag

----

## `<div> Divs </div>`
- Division element
- Generic container, which does not inherently represent anything.
- Used to group elements

Note: Pre-HTML5 the `div` tag was abused to be any container. It still is. Today, we have more semantic elements. Try to avoid adding `div`s all over the place, and use them only were appropriate.

----

## `<h1> Headings </h1>`
- Headings define important text elements on the page, usually per section
- Headings are formally defined up to 6, with decreasing importance: `<h1>`, `<h2>` ... `<h6>`
- There should only be one `h1` tag, generally in the header banner

Note: Generally, it's best to stick as far as `<h4>`; if you find yourself going beyond that, you should consider reorganization. Also, do not skip numbers, go in order from `h1` up.

----

## `<a> Anchors </a>`
- Defines a hyperlink with the `href` attribute
- For example `<a href = 'google.com'>Google.com</a>`
- The text content inside becomes a clickable link
- Links may be local or external
- May also link to downloadable content

Note: A tags have varying styles based on their click status. Bootstrap provides a rational style default. You can use `a` tags to create clickable images.

----

## `<p> Paragraphs </p>`
- Defines a paragraph of text
- Simple and widely applied

----

## `<img> Image`
- Deines an image
- As mentioned, it uses the `src` attribute
- For example: `<img alt='my picture' src='assets/mypicture.jpg'>`
- The `alt` attribute is the text display if the browser cannot load the image. It is also used on hover

Note: I am not forgetting the closing tag, the image tag is self-closing. The `src` can be local or external.

----

## Other tags
- `<ul>` and `<li>`
- `<input>`
- `<span>`
-`<br/>`

Note: I've only gone into detail on the tags we will be using. These are other tags of note. The `ul` and `li` tags handle lists, the `input` tag handles form input (for example, entering a username and password), and the `span` tag allows you to style individual elements within content. I've included the `br` tag specifically to say that it is not good practice to use. It can create a space within content, a break, but it is often abused to space out elements on the page. This list is not exhaustive.

----

## HTML 5
- HTML 5 is the latest HTML specifications (2014)
- Scalable Vector Graphics (SVG) support was added
    - A tag-like way to create colors and shapes into images
- It also added more specific elements, as well as multimedia tags, like `video`, `audio`, and a `canvas` for free-form SVG painting.

Note: The SVG specification is still under development, but it is fairly robust (if complicated). The HTML5 canvas can be used to make games using SVG and JavaScript.

----

## HTML 5 Tags
- `<video>`
- `<main>`, `<header>`, and `<footer>`
- `<acticle>` and `<section>`
- `<nav>`

Note: We will be using the `video`, `main`, `header`, `footer`, and `section` tags in our project. Video operates much like `img`, and the rest are simply semantic divs (that should be unique). Nav often uses a `ul` to define the main site's main navigation. There's a more comprehensive list on MDN [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---

## Cascading StyleSheets (CSS)
- Assigns style properties to HTML elements
- Gives HTML elements pizzaz (color, size, positioning, etc.)
- Layer styles such that multiple style sources may define the same elements and cascade down to the most relevant
- For example, many elements inherit styles from their parents, but may override those defaults

Note: We can open up final product and our dev tools again, navigate to Inspector, click the element picker, and hover over any element on the page to see that exact element as well as all the style associated with it. CSS may be thought of as the body. Style can be written inline, either in an HTML tag itself or in a `<style>` tag, but that should be avoided! It's good practice to separate all your CSS into an external stylesheet. (Classes and IDs are defined inline.) We won't go over the potential properties because there are too many, but suffice it to say that it's robust. Again, not all browsers implement these properties the same, but most are agreed.

----

## CSS

![CSS](http://media.giphy.com/media/xTiTntxRyKDjRFMVqw/giphy.gif)

Note: CSS can be tricky

----

## Selectors
- Selectors are used to semantically access and style certain HTML elements
- IDs and Classes are attributes embeded in an HTML tag with the `id` and `class` keyword
- IDs should be unique, and are accessed with `#` in CSS (/jQuery)
- Classes should be reusable, and are accessed with `.`
- You can also select the element by the tag name
- For example `h1.big { background-color: blue; }` will change the background of every `h1` tag that has the `big` class to blue.

Note: Keep that bracket syntax in mind: that is the general CSS syntax. You can chain selectors together and use parent-child relationships to access certain elements. `background-color` here is an example of a CSS property. This named color value could (and should) be a hex color value. Some colors are considered "web safe", that is, they will show properly on legacy browsers. These should be avoided, generally, for aethetic reasons. We will be using fonts from the Google Style handbook. It's best to be as general as possible with your CSS selectors. For example, favor classes over IDs

----

## Specificity
- Selectors varying degrees of style influence (from least to most powerful:)
    0. Universal selectors (`*`),
    1. Tag selectors,
    2. Class selectors,
    3. ID selectors (e.g., #example),
    4. Inline style
- You can add `!important` to increase the power of a selector.

Note: You don't need to memorize this,just know that that's where the "cascading" term comes from: elements have attributes that may be layered, and certain slectors may outweight others if conflicts arise. Selectors' power increases with specificity. This list isn't comprehensive. `!important` is often useful in overriding Bootstap defaults, but should be avoided.

----

## The Box Model
![The Box Model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)
- The Box model defines the general spacing of the HTML elements on the page.
- The margins, padding, and borders may be adjusted

Note: Each element is given default values, sometimes based on its tag. The size of the element is does not include the whole box model! You can set `* { box-sizing: border-box; }` in your CSS to correct this.

----

## CSS 3
- CSS 3 added things like color gradients, transitions, animations, and the flexible-box
- `@Media` queries were also further developed for increased platform optimization (phones, tablets, etc.)

Note: CSS 3 is still be developed, and we will not be using many of the features in this project. Media queries are especially exciting because it allows for conditional definition of style based on the qualities of the client's device.

----

## Bootstrap
- Bootstrap is a CSS library/framework (just another CSS file), by Twitter
- It provides attractive defaults for most HTML elements, as well as classes and ids for common usages
- It also provides a scalable grid system, optimized for legacy browsers and mobile devices.

Note: Bootstrap really is incredibly handy. It's drawback is that the defaults can be hard to override, and that every site the uses Bootstrap tends to look the same. There are other CSS frameworks, such as [Foundation](http://foundation.zurb.com/). Never use tables to represent a grid-like layout! This is an outdated and bad practice.

---

## JavaScript
- Programming language for web pages
- Allows for dynamic interaction once content has been loaded in the browser
- Can manipulate HTML elements (including their style and other attributes)
- `var`iables store data
- `functions` do things
- Conditionals (`if`, `else`, `else if`) alter control-flow by conditions
- Loops (`for`, `while`) loop over events based on conditions

Note: JavaScript may be thought of as the muscles. JavaScript is a full-fledged programming language. It possibilities are virtually endless. If you're interested in JavaScript, consider attending my talk series on JavaScript at the weekly Computer Science Club meetings in the WPU Mondays at 8 p.m. For our purposes, JavaScript makes HTML elements move around. It's too complicated to review in-depth here, and I'll assume you've been attending the talk series. If you have any programming experience, it should be familiar enough. Because the JavaScript manipulates the web page, it is always best to include it after the web page, in case it tries to manipulate elements that haven't loaded yet.

----

## jQuery
- Provides a simple and robust library for JavaScript DOM manipulation
- Access elements similar to CSS selectors
- `$` denotes jQuery library
- For example: `$('h2.small').hide();` hides all `h2` elements with the `small` class.

Note: jQuery is to JavaScript what Bootstrap is to CSS. jQuery can be called in the head, as it doesn't attempt to manipulate the pages directly, so there's no chance for load conflict.

---

## Step 1
- Start by changing the `title` tag, to your name, for example
- If you can, check the changes live

Note: I've added some basic HTML to the start `index.html` to save time. Information in `<!-- -->` are comments, they won't be taken into account for rendering, they are just for us. Likewise, I've specified the `doctype` and added root `html` elements. This is good practice, but not always necessary in modern browsers.

---

## Step 2
- Lets work on the header
- Two divs: one for the video, and one for the links
- Between them, we need an `img`, `h1`, and `h2`

Note: Don't worry about how everything looks for now. The `img` needs a `src` to your profile picture. The `h1` is going to be our main banner name, so it should be your name. And the `h2` is a subheading: a short description of yourself.

----

So:
```
<header>
    <div>
    </div>
    <img alt="Profile Picture" src="assets/profile.png" id="profilePicture">
    <h1>Rubber Duckerson</h1>
    <h2>Sentient Rubber Duck</h2>
    <div>
    </div>
</header>

```

----

- In the top video `div`, we want to add a `video` tag, with a nested `source` tag that points to our video
- We also want to add the `loop`, `muted`, and `autoplay` attributes
```
<div>
    <video loop muted autoplay>
        <source src='assets/background-video.mp4' type='video/mp4'>
    </video>
</div>
```

Note: You will probably use the duck video for now.

----

- In the links bottom `div`, add a series of nested linked images.
- We want the `href`s to point to the target site, and we want the `img.src` to point to the respective icon
- We can also add an `alt` attribute to the images, in case they don't load, etc.
```
<div>
    <a href="https://www.facebook.com/rubberduck">
        <img alt="Facebook" src="assets/facebook.png">
    </a>
    <a href="https://twitter.com/rubberduck">
         <img alt="Twitter" src="assets/twitter.png">
    </a>
</div>
```

Note: We want the images themselves to be linked, so we we nest them in links. I chose a series of popular icons, but you can add more later. Likewise, you don't need to add all of them. In fact, don't spend too much time adding them all now.

---

## Step 3
- Let's add the main content. This will include a cover letter and resume
- So add two `section`s for those:

```
<main>
    <section>
    </section>
    <section>
    </section>
</main>
```

----

- For the cover letter `section`, we want to add two nested decorative `divs`
- Inside those we need an `h2` for the heading of the cover letter, and a series of `p`aragraphs
- The final paragraph should include a downloadable link to your resume

Note: Again, for the resume, we can use the duck resume for now. The decoative divs aren't necessary, but they are nice. The heading should describe the section, so something like "About Me" or "Cover Letter". Don't worry about writing the letter itself now; you can use placeholder text, even lorem ipsum. Don't worry about the `target=_blank` attribute, that just opens a link in a new tab.

----

So:
```
<section>
    <div>
        <div>
            <h2>About</h2>
            <p>I am an undergraduate CS student at the University of Pittsburgh, expected to graduate May 2018.</p>
            <p>I'd ask you not to worry about details like how I use a keyboard; instead, consider what I can offer your company.</p>
            <p>Click here to <a target="_blank" href="assets/resume.pdf">download a PDF version</a> of my resume.</p>
        </div>
    </div>
</section>
```

----

- Next the resume section
- This is too complicated to develop right now, so we'll add a few placeholder sections
- All sections should be the same format

Note: Be sure to add more later! Use the final product as reference

----

- Each subsection of the resume is contained within a `div`, which has a `h2` title and an inner `div` for each further subsection
- Those subsections have `h3` titles and inner divs for each further subsection of important information
- `p` tags are used for descriptions

Note: It's better to see an example here

----

So:
```
<section>
    <div>
        <h2>Education</h2>
        <div>
            <h3>University of Pittsburgh</h3>
            <div>
                <h4>Bachelors of Science in Computer Science</h4>
                <h4>Anticipated: April 2018</h4>
            </div>
            <div>
                <h4>Dean's List</h4>
                <h4>Fall 2015</h4>
            </div>
        </div>
    </div>
    <div>
        <h2>Relevant Experience</h2>
            <div>
                <h3>Scrouge McDuck Corp.</h3>
                <div>
                    <h4>Software Engineer Intern</h4>
                    <h4>May-August 2015</h4>
                </div>
                <p>Not all it was quacked up to be, honestly.</p>
            </div>
    </div>
</section>
```

---

## Step 4
- Let's add the footer!
- In the footer, we want to boast our skills and provide an email link

```
<footer>
    <p>Homemade with HTML/CSS and elbow grease.</p>
        <a href="mailto:rduckerson93@gmail.com">Contact Via Email</a>
</footer>
```

Note: We can use and `a` tag to send emails, too. In fact, you can add attributes to provide a base template for the email. But we won't get into that now.

---

## Step 5
- Let's start on our CSS
- First, we will add our classes an IDs so they are accessable

Note: Remember that we've alreadt included our Bootstrap library and our own CSS. The `/**/` lines are comments, similar to HTML comments, they are not evaluated. These id and class names are not fantastic.

----

Header:
```
<header>
    <div id='header-background'>
        <video loop muted autoplay>
            <source src='assets/background-video.mp4' type='video/mp4'>
        </video>
    </div>
    <img alt="Profile Picture" src="assets/profile.png" id="profilePicture">
    <h1>Rubber Duckerson</h1>
    <h2>Sentient Rubber Duck</h2>
    <div>
        <a href="https://www.facebook.com/rubberduck">
            <img class='icon' alt="Facebook" src="assets/facebook.png">
        </a>
        <a href="https://twitter.com/rubberduck">
             <img class='icon' alt="Twitter" src="assets/twitter.png">
        </a>
    </div>
</header>
```

----

`<main class = 'container-fluid'>`

Note: This defines a Bootstrap fluid grid. So anything inside can be divided into rows and columns, and it will maintain its dimensions on resizing. Ideally, we would be utilizing this grid more; everything inside a grid should have some container specification. However, we don't want to complicate things here.

----

Cover Letter:
```
<section>
    <div class='section shadow'>
        <div class = 'inner shadow'>
            <h2 class='heading'>About</h2>
            <p>I am an undergraduate CS student at the University of Pittsburgh, expected to graduate May 2018.</p>
            <p>I'd ask you not to worry about details like how I use a keyboard; instead, consider what I can offer your company.</p>
            <p>Click here to <a target="_blank" href="assets/resume.pdf">download a PDF version</a> of my resume.</p>
        </div>
    </div>
</section>
```

Note: For the `div`s here, we are actually defining two classes: for example, the `section` and `shadow` classes. Simply separate multiple classes by a space. An element should not have more than one ID, though.

----

Resume:
```
<section>
    <div class='section shadow'>
        <h2 class='heading inner shadow'>Education</h2>
        <div class='inner shadow'>
            <h3 class='name'>University of Pittsburgh</h3>
            <div class='row'>
                <h4 class='col-sm-6'>Bachelors of Science in Computer Science</h4>
                <h4 class='col-sm-6'>Anticipated: April 2018</h4>
            </div>
            <div class='row'>
                <h4 class='col-sm-6'>Dean's List</h4>
                <h4 class='col-sm-6'>Fall 2015</h4>
            </div>
        </div>
    </div>
    <div class='section shadow'>
        <h2 class='heading inner shadow'>Relevant Experience</h2>
            <div class='inner shadow'>
                <h3 class='name'>Scrouge McDuck Corp.</h3>
                <div class='row'>
                    <h4 class='col-sm-6'>Software Engineer Intern</h4>
                    <h4 class='col-sm-6'>May-August 2015</h4>
                </div>
                <p class="row">Not all it was quacked up to be, honestly.</p>
            </div>
    </div>
</section>
```

Note: Again, we are using bootstrap classes to define rows and columns. Check out their [website](http://getbootstrap.com/getting-started/) for more on this. We don't need any classes or ids for the footer.

---

## Step 6
- Jump into the CSS file and we'll add styles to these selectors

Note: the selectors should be there, and there should already be a few properties defined for convenience.

----

- `section`s should have more space between the border and content
- So we'll add `padding: 0.5% 10%;`
- Likewise, we'll want to add padding to the left and right of the `p` tags' content
- So we will add `padding-left: 1%;` and `padding-right: 1%;`
- The `heading` and `footer`, too could use paddings, only on all sides: `padding: 1%;`

Note: This percentage is taken from the size of the box itself. With the `section`s are defining both the top-bottom and right-left padding with this shorthand, respectively. We could define them separately, as we do with the `p` tag. The `header` and `footer` shorthand defines it around all sides. Don't forget to terminate with a semicolon.

----

- `header` and `footer` need their text centered, so: `text-align: center;`
- `header` could use a border on the bottom, so we will add: `border-bottom: 1px solid #212121;`

Note: For properties of both `header` and `footer`, we can define both with a comma separation. The border is accessed by sides similarly to padding and margins, we define a solid black border. It could be, say, dotted, instead. We also access the all `a` tags in the `footer` and change their color by chaining their selectors, separated by a space.

----

- `#header-background` needs to be set behind other elements in a fixed position.

```
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width:100%;
```
- The video needs to be full-width and we want to scale the height appropriately:
```
width:100%;
height: auto;
```

Note: Remember, this was the id for the video `div`. We want to send it to the back, and keep it there for what's called parallax: a fixed background with a moving foreground.

----

- We want to round the profile image. Essentially, we take the `border-radius` property, which can produce beveled edges, and round it entirely at `50%;`
- And we only want it to be `width: 25%;`
- Our `.icon`s should be small, say : `width: 6%;`, and we also want to scale the height: `height: auto;`

Note: I added browser support to this property. As mentioned, not all browser implement properties the same, so we need to make sure that it looks the same cross-browser. Percentage sizes are preferred because they will scale based on the device. Alternatives include pixels.

----

- As with the `border-radius` property, not all shadows are the same.
- We want to add a shadow that is offset and spans about `3px`, and gray-black:
`box-shadow: 0 2px 3px #BDBDBD;`

Note: I've added the cross-browser boilerplate.

----

- Let's space out some other elements with margin and padding:
    - `.inner, .section` should have `padding: 5%;` and `margin: 1%;`
    - `.heading` should have 2% padding all around
    - `.name` should have about 2% padding on the bottom

----

- We'd like all our section headings to have the text centered.
- We're going to add a clickable dynamic element to the,, too, so we want to show a pointer-cursor when we mouse over it: `cursor: pointer;`

---

## Step 7
- Let's add our jQuery
- We'd like to add a click event to the section headers that hides or shows all its section.
- We have already found all the elements and set their current sibling's state to "shown", using a custom `toggle` attribute
- We can use this state to test them when we click

Note: remember that we've already included our jQuery library and our own JavaScript. The `//` lines are comments. They are not evaluated.

----

- We add a click event listener (function) to the heading
- It will fire, and we can tell which element was clicked
- We need to get each of its siblings:

```
$(this).siblings().each(function(i, sibling) {
    //to things
});
```

Note: `this` in context means the element that was clicked. jQuery gives us its `.siblings()` and the ability to loop over all of them with `.each()`

----

- If the siblings are shown, hide them; if they are hidden, show them.

```
//if hidden, show, then set state accordingly
if($(sibling).attr('toggle') === 'hidden') {
    $(sibling).show();
    $(sibling).attr('toggle', 'shown');
}
//otherwise, hide and set state accordingly
else if ($(sibling).attr('toggle') === 'shown') {
    $(sibling).hide();
    $(sibling).attr('toggle', 'hidden');
}
```

Note: We use jQuery's `.each()` to loop through all the results, then `.attr` to check for attributes of HTML and see if it's hidden or shown, based on the `toggle` attribute we set originally. We then use the built-in `.show()` and `.hide()`

---

## Questions?

Note: Great job! You've begun your web development in spades! You can reference these slides and the completed project going forward, and check out the great resources for further learning.

---

## Further Learning
- [Codecademy](https://www.codecademy.com/learn)
- [W3Schools](http://www.w3schools.com/)
- [MDN: Getting Started with the Web](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web)
- [Kahn Academy](https://www.khanacademy.org/computing/computer-programming)

Note: Codecademy provides a great, interactive practical introduction. W3Schools and MDN are both great for more in-depth examples and references. And Kahn Academy's track has really inviting video lessons.

