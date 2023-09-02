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


9/1 used     observer3.disconnect()

not so fast
    when i use it on the first scrollinto, it works perfectly for the pc version, but not the mobile, since it operates seperately.
    when i use it for the second, it doesn't work, i need to find a way to input it properly.
        the mobile menu has gone back to not working, i need to fix that first as a prerequisite to fix the scrollinto
    
    can comfterablly input the disconnect into the pc version

for mobilemenu test 1 and 2 work but not three
    for the if statement 
        event.target = respon triggers as true. need to be able to make it trigger as false    
        event.target != respon doesnt change anything. is there an issue with there being two seperate scrollintoviews?

        putting in the proper event menubutton[k] caused severse animation effects to affect the mobile menu. i think i may need to condense the two scrollintoview


I made     if (k > 3) {
      k -= 4;
    }
 due to issues of both sets of buttons sharing a class
both scrollintos shouldnt need one as one should be responding to the mobile and one the pc

i tested and my suspicions are confirmed. the fimvtopms are relating to the pc buttons, not the mobile ones
    possible solutions
            seperate both buttons into seperate classes
            alter the if statement so only 1 set of values is run instead of two where one overrides the other



            9/3 So close to being done. there is some sort of issue with the notes...again

            when i scroll down the site manually, they are in their proper place. When i go down with the buttons, the notes line up horizontally

            s,b fine,bad
            s,s fine,fine
            b,b bad, bad
            b,s bad fine

            theres something about trigger the button event that messes with the layout

            tested both versions. theimproper on doesnt have "grave__Grave--Animate" while the proper does. 
            The class is added while I scroll down. it isnt there by default. 
            hypothesis: the notes start off messed up but become "acceptable" when the event is triggered. I need to have them that way from the beggining. 

            The issue was the animate class and the styles for visuals beign shared. I seprerated them.

            Now the issue is the button to "contact" isn't working well. It has something to do with the iframes. 