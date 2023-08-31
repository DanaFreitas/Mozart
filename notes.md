769
1025
1201


whr left side of the hero image disappears but not the other. something to do with responsiveness. need to ,make peage feel less dead






        wanted musical staff somewhere, but thats scopecreep and bad visually.

having the title clickable and a septerate scroolintoview messes with the other scrollinto view.
    have way for the title and the home button to do the same thing?
    add chatgpt text. edit to make own. style, excited fan?




scroll to legacy works weirdly the first time



use data stuff and clean up

likely issue with the legacy and contact sections,
    legacy:it bounces to the bottom of the sccreen the first time and then goes up

    contact: bounces down
        likely due the small size of the secion


mobile
    the links are back to not working


even when the contact section is padded out, both contact and legacy go to the bottom of the page during the initial click. life doesnt. the answer is in the js.

get better class name than scrolitem




8/29 the pages wont scrol right

8/30 read about asyncronous operations interfering with the page scrolls. i think the issue is the animating pictures. for the "hislife" section, it worked fine because the only picture that needed to be animated appearsed when loaded. I made copies and that messed with it! I need to figure out how to make the animated images not interfere

I was a bit wrong. The initial mistake was because of the classes. After more testing, the issue has something to do with the grave animations.
    next, test if its the notes, the animation, or the image itself.

    the image itself isnt the isse

 animtion doesnt happen scroll not ok

    animation happens, scroll ok.
    animation ommitted scroll ok
    even if animation isnt complete, scroll ok

    something about the animation being abailable, but not triggering causes rgw problem

    move the entire class, animate fine, but messy

    if its intersection observer, shouldmt it be interfered with by other parts too?

    // Disconnect the Intersection Observer
observer.disconnect();

// Scroll the element into view
element.scrollIntoView({ behavior: 'smooth' });

// Reconnect the Intersection Observer after a short delay
setTimeout(() => {
  observer.observe(element);
}, 500); // Adjust the delay as needed


chatgot idea

notes
    i may have to rearrange the positions of scrollinto view and intersection observer to mae this work
    scrollintoview line 17
    intersection obsrever 3 linr 163

does this sffect other animations?

inspect other options as well.