import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
            
            <nav id="articles" class="articles">
                <a href="#topic1">Web Servers</a>
                <a href="#topic2">Frontend Design</a>
                <a href="#topic3">Optimizing Images</a>
                <a href="#topic4">Cascading Stylesheets</a>
                <a href="#topic5">Forms</a>
                <a href="#topic6">Express</a>
                <a href="#topic7">JavaScript</a>
                <a href="#topic8">Dom Changes with Random Data</a>
            </nav>
            <article id="topic1">
                <h3>Web Servers</h3>
                <p> 
                    In layperson's terms, an <strong>index</strong> is the homepage of most web applications. When
                    a user navigates to a homepage of their favorite website, they are actually
                    navigating to a root directory for that homepage. Whenever a GET request is 
                    received by the URL, it will return to this <strong>index</strong> and go from there. 
                </p>
                <p> 
                    The main difference between the local, public folder, and web server details using the web dev tools
                    is <strong>time</strong>. On my local computer, the time for the HTML file is consistently 2ms. 
                    Using the public folder, the time ranges between 56ms and 59ms. Even still, using the ENGR 
                    server is something in between: 27ms. However, the opposite is true for main.css and main.js. 
                    On my local machine, the time is 15ms and 29ms respectively. For the public folder, it is
                    consistently 2ms for each. For ENGR, it is 18ms and 19ms. What this could tell me is that public folders
                    are much more efficient at processing failed aspects of a webpage than local machines, but it will
                    require more observation to know for sure.
                </p>
                <p> 
                    Other observations are mainly between local and ENGR server. These include the <strong>favicon</strong> being included in 
                    the names section for ENGR, but not local. <strong>Status</strong> for main.css and main.jss for web server 
                    show 404 instead of just "(failed)." <strong>Initiator</strong> adds .html to index instead of just showing "(index)".
                    The <strong>size</strong> difference is also pretty significant, with local server giving main.css and main.js 0 Bytes,
                    which makes sense because they are not found. However, the ENGR server says they are each 216 Bytes.
                    Conversely, the index.html file goes from 2.6 kB on my local machine to 1.5 kB on the server. 
                    This could be because the web server allocates space for main.css and main.js whether they are present
                    or not, or because the act of checking for those files and returning "failed" takes up 216 Bytes of space.
                    More observation is needed to understand that relationship. Lastly, the <strong>Waterfall</strong> section for the local
                    machine is just a thin vertical line of red and blue. For the web server, however, it has a series of 
                    small white bars followed by thick green ones (the HTML file is left-aligned whereas the main.css and the
                    main.js ones are right-aligned).    
                </p>
                <p> 
                    This outcome depends on if I use the ENGR server, or I copy it directly from the web server. If
                    I view my webpage directly from the web directory there is no favicon, and nor is the file
                    there at all. If I use the ENGR server, however, the favicon and file is there. The reason why
                    it would have <strong>status 200</strong> is that the status would be set to "OK" and should be working correctly.
                    Being able to view the favicon in the browser confirms that this is true. Meanwhile, main.css 
                    and main.js are both set to <strong>status 404</strong>, which means "Not Found," most likely because those files are not
                    present.
                </p>  
                <p> 
                    An interesting observation is how different local file URLs are compared to the ENGR web server ones. 
                    https:// refers to the <strong>scheme</strong>. web.engr is the <strong>subdomain</strong>. oregonstate.edu 
                    is the <strong>domain</strong>. partinc/a1-partinc would be the <strong>resources</strong>, which should navigate us
                    to the specific section of that domain. (Which it does!) 
                </p>    
            </article>
            <article id ="topic2">
                <h3>Frontend Design</h3>
                <p>
                    Simply put, <strong>frontend design</strong> is the part of a website that a user sees and interacts with directly. 
                    It includes features such as the <strong>visual design</strong> of a webpage, the <strong>graphical-user-interface</strong>, 
                    and any <strong>interactivity</strong> the page may have. Frontend design is extremely important because it, beyond anything
                    else, will determine user experience and usability. A good frontend design will have <strong>strong accessibility</strong> so anyone, regardless
                    of technical comfort level or disability, can use it. Colors on the page should be complimentary and add to the usability of the site.
                    The site should have strong <strong>response time</strong> so the user's tasks are not interrupted, and if interruption is unavoidable we should warn the user.
                    Lastly, we should keep <strong>content depth</strong> to a minimum so users can more easily navigate the website without interruption or frustration.
                    Simply put, without a solid frontend design, your website will likely be an unpopular one. 
                </p>
                
                    <h4>The Five "E's" of Usability</h4>
                    <dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>How likely it is that the user will accomplish their goals using a specific product, service, or system.</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>How quickly a user can accomplish their goals using a specific product, service, or system.</dd>
                        <dt><strong>Easy to Navigate</strong></dt>
                        <dd>How easily a user can get around your product, service, or system without needing additional help.</dd>
                        <dt><strong>Error-Free</strong></dt>
                        <dd>How many accessibility and availability issues for a product, service, or system will a user run into? Hopefully none.</dd>
                        <dt><strong>Enjoyable</strong></dt>
                        <dd>How entertaining or engaging a particular product, service, or system is for the user.</dd>
                    </dl>
                
                <p>
                    <strong>Page-layout-tags</strong> are used to separate the content of a page into logical sections and will typically
                    be displayed with a newline before and after the content inside the page-layout-tag. Examples of such tags 
                    include the <strong>header</strong> tag, which defines the banner of an app or site; the <strong>nav</strong>
                    tag, which is used to help users navigate from one page of a site to another; and the <strong>main</strong>
                    tag, which is the primary block of an HTML document that holds the main content of the page. This content is 
                    often broken up using additional <strong>page-layout-tags</strong>, such as <strong>section</strong>, <strong>article</strong>,
                    <strong> aside</strong>, and <strong>figure</strong> tags. 
                </p>
                <p>
                    <strong>Text-anchors</strong> are elements that link, or "anchor", specific text in your application to another section or page.
                    This can be used throughout a document or webpage. Conversely, a <strong>nav bar</strong> will usually be a visual representation
                    of some kind on a page, and will often include a series of buttons you can click to navigate to the main parts of a 
                    website or application. <strong>Anchors</strong> are also used within the <strong>nav bar</strong>, but their purpose is to navigate you to 
                    Table of Contents level content, whereas <strong>text-anchors</strong> could link you to external websites, or sections of an app 
                    or page that may not be worth placing in a <strong>nav bar</strong>. 
                </p>
            </article>
            <article id="topic3">
                <h3>Optimizing Images</h3>
                <p>
                    There are six major specifications of images on the web. These include having a <strong>descriptive file name</strong>,
                    a <strong>small file size</strong>, the <strong>exact dimensions</strong>, the <strong>correct file format</strong>, a 
                    <strong> reduced resolution</strong>, and the correct <strong>color mode</strong>. A <strong>descriptive file name</strong> is important because
                    search engines use these file names to categorize images for users who search using similar keywords. Having a <strong>small file size </strong>
                    having a fast response time is important for web pages, and the larger the file size, the slower the image (and page) will load.
                    Resizing the image to the <strong>exact dimensions</strong> that are required for the web application will also lower load times
                    for images. Using the <strong>correct file format</strong> will also guarantee that the image will display as intended to
                    users. <strong>Reduced resolution</strong> also plays a role in image load speed and file size, but it's important to get a balance
                    between a reduced resolution for speed while still maintaining a high enough resolution for modern displays. Lastly, <strong>color mode </strong>
                    uses RGB color for accurate color for files types such as .PNG, .JPG, .SVG, and .WebP, and it uses indexed color for .GIF.
                </p>
                <p>
                    The best file format to choose for an image will depend on the type of image you're displaying. For <strong>line art</strong> graphics, 
                    .GIF and .PNG are the best because they offer transparency (8-bit for GIF, true transparency for .PNG) for <strong>line art</strong> images. For 
                    <strong> photographic images</strong>, .JPG and .WebP files would be best, as they compress down to small file sizes quite well and keep their shape. 
                    WebP files can also utilize transparent backgrounds by using an <strong>alpha channel</strong>. 
                </p>
            </article>
            <article id="topic4">
                <h3>Cascading Stylesheets</h3>
                <p>
                    HTML and web browsers tend to come with their own default styles, so why would we need to utilize <strong>stylesheets</strong> using a 
                    language like CSS? The main reason is that <strong>stylesheets</strong> allow a programmer to not only use different styles
                    than those included in defaults, but to also change all the element of a certain type all at once, instead of individually. 
                    For example, using a <strong>stylesheet</strong> would allow a user to change the default font from Times New Roman to one of the 1000+ that 
                    Google Fonts offers to all of their header tags. <strong>Stylesheets</strong> allow programmers to customize their websites, not only for 
                    branding purposes, but also for creative and artful design, accessibility, usability, and readability. 
                </p>
                <p>
                    There are five main ways to incorporate styles. The first way is using an <strong>external</strong> method, which would use 
                    stylesheets, like those found in CSS, that would redefine an element or a group of element's selector. A single stylesheet
                    can redesign a multitude of pages simply by being linked by those pages. In addition, there are four ways to incorporate styles
                    directly in HTML and JavaScript files, but these are much less efficient than external stylesheets as they are meant as one-off 
                    changes only. <strong>Embedded</strong> styles are one such method, using style tags within HTML documents. <strong>Inline </strong>
                    style methods are similar, though they use a key:value pair of attributes and values, such as "color:purple." 
                    <strong>JavaScript template literals</strong> within a JavaScript function allow for constant changes that will never change at 
                    any level. Lastly, you can use a <strong>regular Javascript</strong> method by directly manipulating the <strong>Document Object Model (DOM)</strong>.               
                </p>
            </article>
            <article id="topic5">
                <h3>Forms</h3>
                <p>
                    Successful and accessible web forms will have 6 strong attributes. Such forms will <strong>
                    provide clear instructions to users</strong> before the form is presented and in each label and question. 
                    Additionally, they will also <strong>communicate to users the importance of the form</strong> and why you are 
                    gathering such data. The first question that offers a field for the user to type <strong>should be set to 
                    autofocus</strong> so users don't need a keyboard to enter the fields. Along with this, each form control, including
                    <strong> checkboxes</strong> and <strong>radio</strong> bubbles, <strong>can be completed using only the keyboard</strong>. 
                    There should also be <strong>tab indexing to complex forms</strong>, so users can easily tell which order they should 
                    answer the questions. Lastly, when a user completes a form there should be a<strong> validation message</strong> that is 
                    <strong> screen readable</strong>, because the default HTML browser message is not. 
                </p>
                <p>
                    There are multiple major tags for forms in HTML. The first (and most obvious) is the form tag. A form tag sets the form 
                    up and can include most anything except for other form tags. Attributes of the form tag are <strong>action</strong>,
                    which points from where the form should be sent. The second attribute is <strong>method</strong>, which specifies 
                    the HTTP method that the form should use. The default is <strong>GET</strong>, but this can be changed to a more secure
                    <strong>POST</strong> method. 
                </p>
                <p>
                    The form controls include the <strong>label</strong> tag, to assist users in understanding the purpose of their data entry.
                    It includes a <strong>for=""</strong> attribute that matches the form's <strong>ID</strong>. Additionally, more complex 
                    forms include <strong>fieldset</strong> and <strong>legend</strong> tags, which help separate the controls into logical 
                    groups. They especially help those who may need additional assistance with forms, like those who are visually-impaired. The
                    <strong>legend </strong> tag should include prompts to help users understand the purpose of a question, as well as help 
                    guide them when necessary. 
                </p>
                <p>
                    The <strong>input</strong> tag is a common tag that simply allows for user input. Using this, a form can include text 
                    boxes and other fields that allow for more complex answers to questions and more specific data entry (like a user's name). 
                    A <strong>name</strong> attribute is quite important, as that attribute tells the server which answer is associated with
                    which part of the form. It also includes a <strong>type</strong> attribute, which changes how something in a form is displayed,
                    how it is used, and the other types of attributes can be used with it. <strong>Types</strong> include <strong>checkbox</strong>, 
                    <strong> radio</strong>, and <strong>email</strong>. Lastly, <strong>required</strong> is an important 
                    attribute because, for one, it prevents bots from just auto-sending a form over and over again, and for two, it can ensure
                    that the form is getting all the data that it is hoping to get. 
                </p>
                <p> 
                    In addition to these major tags, there is also the <strong>select</strong> element, which creates a selector for the user to 
                    make a choice. Within this tag, <strong>option</strong> tags are used to define the user's choices in a drop-down list. Typically,
                    "other" is set by default, but can be changed. There is also the <strong>textarea</strong> tag, which allows for a comment box
                    that the user can type into, the <strong>button</strong> element, which can be used to create a button, like one to submit a form 
                    with. 
                </p>
                <p>
                    There are many recommendations to improve the usability of forms. The important thing is to make sure that all users, regardless
                    of background, disability, or anything else, can fill out these forms. One such example is making sure that all buttons and 
                    any other elements a user may click on, be about the size of the tip of a finger. This means we should accommodate both users with
                    fatter fingers, and those who suffer from arthritis, to make sure they can also comfortably click on the various elements,
                    like buttons and links. Labels and inputs should also be organized and separated conveniently to reduce a user's confusion. 
                </p>
                <p>
                    The most important thing is to make sure that borders, margins, colors, font types, font sizes, etc. should all be changed to 
                    offer the most accessibility. Colors should be complimentary and shouldn't strain the eyes, nor be difficult for those with
                    visual impairments, like colorblindness, to see. Everything in the form should be given appropriate margins and padding to
                    keep elements properly organized and separated. For example, <strong>fieldset</strong> borders should be changed from the
                    default gray to something easier to pick out for the user. A margin helps separate the content, and padding helps elements
                    inside the <strong>fieldset</strong> stay separated from one another. 
                </p>
            </article>
            <article id="topic6">
            <h3>Express</h3>
                <p>
                    <strong>Express</strong> is a <strong>Node.js</strong> web application framework with a variety of features for web and mobile
                    developers to use in their products. These tools include <strong>Application Programming Interfaces (API)</strong> for a variety
                    of common tasks that web applications typically need. With <strong>Express</strong>, we can <strong>get</strong>, <strong>post</strong>,
                    and <strong>delete</strong> data, as well as define the <strong>ports</strong> and <strong>routes</strong> the data will use. Additionally,
                    <strong> Express</strong> can be used to create static files, templates, and dynamically-built responses with incorporated data. 
                </p>
                <p>
                    <strong>Node</strong>, or <strong>Node.js</strong>, is an open source, cross-platform runtime environment that is used to develop 
                    networking and server-side applications. Such applications are written using JavaScript (hence the .js), and can be run on the major 
                    computing platforms, such as Windows, Mac, and Linux. For developer convenience, it also offers a library of included modules for Javascript.
                </p>
                <p>
                    <strong>npm</strong> is an automatically-installed feature of <strong>Node</strong>. <strong>npm</strong> is an <strong>online repository</strong> for 
                    <strong> Node</strong> packages and modules, as well as a <strong>command-line utility</strong> that can be used to install packages from other sources,
                    and manage these packages for developers. <strong> npm</strong> has three main commands, which include <strong>npm init</strong> which creates a 
                    <strong>JSON</strong> file to initialize the application; <strong>npm install package</strong>, which installs the specified package; and <strong>
                    npm start</strong>, which will start the <strong>Node.js</strong> application. 
                </p>
            </article>
            <article id="topic7">
            <h3>JavaScript</h3>
                <p>
                    The main data types seen in Javascript are <strong>numbers</strong>, <strong>boolean values</strong> like true and false, <strong>strings</strong>, <strong>symbols</strong>, the special values
                <strong> undefined</strong> and <strong>null</strong>, and other objects. Values that are not objects are known as <strong>primitive types</strong>. There is also a process
                    known as <strong>dynamic typing</strong>, which can be used to dynamically insert values in real time in placement of variables. <strong>Numbers</strong> in 
                    JavaScript are double-precision floating-point numbers. <strong>Strings</strong> can be enclosed in either double or single quotes, and 
                    JavaScript also supports <strong>template literals</strong>, which allow for variable expressions. 
                </p>
                <p>
                    JavaScript objects are sets of key-value pairs. These sets are known as the <strong>properties</strong> of a JavaScript object. Known as <strong>CRUD</strong>, 
                    we can <strong>create (add)</strong>, <strong>read</strong>, <strong>update</strong>, and <strong>delete</strong> these properties as we see fit. <strong>Adding </strong> 
                    a property is done using dot notation after the object name, like sword.color = "gold". If the sword does not have a "color" property, it will be created. Otherwise,
                    it will be updated. <strong>Reading</strong> a property is similarly done, where sword.color would read the color property of the object "sword,"
                    or, in this case, "gold." <strong>Deleting</strong> an object simply uses the <strong>delete</strong> operator. 
                </p>
                <p>
                    <strong>Arrays</strong> in JavaScript are objects with property types that are strings of numbers, starting with 0. In some other programming languages, these properties might be 
                    called indices. We access each element of the array by using square brackets ([]), and including the string of the property name. For the first index, an example would
                    be ["0"]. Other than these properties, values in an array can be of any JavaScript type, including other objects. 
                </p>
                <p>
                    <strong>JSON</strong> stands for <strong>JavaScript Object Notation</strong>. Such files are commonly used for exchanging data between varying applications. Despite having the 
                    word "JavaScript" in the title, <strong>JSON</strong> files are programming language agnostic, and most programming languages include <strong>JSON</strong> libraries that are easy 
                    to implement. While objects and their syntax will be represented differently between different programming languages, <strong>JSON</strong> files <strong>map</strong> objects 
                    from a program to a string in the <strong>JSON format</strong>, and then can create an object in whatever language is using the <strong>JSON</strong> file from those strings. 
                    This means that we can use <strong>JSON</strong> to quickly exchange data between programs, even when those programs are built using different languages. 
                </p>
                <p>
                    Like most programming languages, JavaScript allows for conditionals and loops. For conditionals, JavaScript allows for <strong>if statements </strong>
                    and <strong>switch statements</strong>. Basic <strong>if statements</strong> will execute if the provided expression returns True. We can also use 
                    <strong> if-then-else statements</strong> to include other conditionals, or, in the case of <strong>else</strong>, if none of the mentioned conditions evaluate to True. 
                    <strong>Switch statements</strong> are if-then-else statements that compare the same variable to different values. <strong>Conditions</strong> in 
                    JavaScript allow values of any type.
                </p>
                <p>
                    As far as loops are concerned, like most programming languages there are <strong>while</strong> loops and <strong>for</strong> loops. While statements 
                    will execute if the expression evaluates to True, and will keep going until it returns False. If it never evaluates to False, it will become infinite. 
                    A <strong>do while</strong> loop is similar, except it will be evaluated after it has executed one time. This means that a traditional <strong>while </strong>
                    statement will not execute at all if the condition does not evaluate to true, a <strong>do while</strong> statement will execute once, then check if 
                    the condition is True or not. The <strong>for</strong> loop is used to execute a set number of times, like iterating over elements. Once the 
                    statement has been initialized and the condition has been evaluated, if the condition is true, it will loop until the loop condition is false. Lastly,
                    the <strong>for of</strong> loop is specifically used for iteration over elements of objects like arrays and strings, whereas the <strong>for in </strong>
                    statement is used to iterate over the properties of an object. 
                </p>
                <p>
                    Simply, <strong>object-oriented programming</strong> is the process of creating objects, usually via class syntax by declaring their identities, states, and behaviors. 
                    While objects can be created in JavaScript without using <strong>class</strong> syntax, JavaScript does support it. A <strong>class</strong> can have 
                    one <strong>constructor</strong>, which is named constructor. If it is declared without one, it will create an empty one. <strong>Object-oriented programming </strong>
                    in JavaScript also supports <strong>static methods</strong> and <strong>Fields</strong>, which are properties of a class and not objects themselves. JavaScript 
                    also supports <strong>subclasses</strong>, which inherit properties, fields, and methods of a <strong>superclass</strong>. <strong>Subclasses</strong> can also
                    override any inherited methods declaring and defining those methods themselves. 
                </p>
                <p>
                    <strong>Functional programming</strong> is the act of programming using <strong>functions</strong>, which, in JavaScript, are known as <strong>first-class</strong> values. This means they can be 
                    assigned to variables, have definitions when other <strong>functions</strong> are passed in as arguments, and have definitions when <strong>functions</strong> are returned. A <strong>function </strong>
                    that receives another function as an argument is known as a <strong>higher-order function</strong>. When a function is passed into a higher-order function and 
                    isn't useful outside of that function call, it can be defined as an <strong> anonymous function</strong> instead. <strong>Anonymous functions</strong> do not have a 
                    name and are defined using <strong>function expressions</strong> (which return a function). Additionally, <strong>functions</strong> can be <strong>closure </strong> 
                    functions, which include variables that are neither parameters passed to those functions, and nor are they local variables. These variables are called <strong>free variables</strong>.
                </p>
            </article>
            <article id="topic8">
                <p>
                    There are multiple reasons why developers update the <strong>DOM</strong> of a webpage using JavaScript and Express. The first 
                    is that it is the <strong>World Wide Web Consortium's</strong> official standard. Additionally, it provides <strong>APIs </strong>
                    for many types of online documents, including <strong>HTML</strong> <strong>CSS</strong>, and <strong>XML</strong>. The biggest 
                    reason why developers use <strong>JavaScript</strong> to update the <strong>DOM</strong> of a page is to dynamically access and 
                    revise content, structures, and styles of web documents.
                </p>
                <p>
                    In <strong>JavaScript</strong>, DOM offers two global objects, <strong>window</strong> and <strong>document</strong>. <strong>Window </strong>
                    objects represent browser windows, and <strong>document</strong> objects represent the loaded webpage. These will allow a developer to work 
                    through a webpage's tree and see how and when it is <strong>rendering</strong> certain elements of the page. Modifying a DOM tree by traversing
                    these different branches would allow a developer to control the styles and actions of each of those elements in the order that they are <strong>
                    rendered</strong>. It also allows the developer to modify the <strong>structure</strong> the DOM tree. 
                </p>
                <p>
                    Regarding <strong>Express</strong>, developers can add and modify functionalities available to <strong>server programs</strong>. Express uses 
                    <strong> Middleware</strong> to apply <strong>HTTP requests</strong> to specific <strong>Express</strong> programs that are, essentially, 
                    built of <strong>Middleware</strong> functions that are applied to <strong>HTTP requests</strong>. There are multiple functions that 
                    <strong>Middleware</strong> uses, including <strong>app.METHOD</strong>, which add <strong>route handlers</strong> and <strong>HTTP requests</strong>, 
                    and <strong>app.use()</strong> <strong>API</strong>, which registers <strong>middleware</strong> functions to execute. 
                </p>
            </article>
        </>
    );
}

export default TopicsPage;