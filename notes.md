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
            hypothesis: the notes start off messed up but become "acceptable" when the event is triggered. I need to have them that way from the beginning. 

            The issue was the animate class and the styles for visuals beign shared. I seprerated them.

            Now the issue is the button to "contact" isn't working well. It has something to do with the iframes. 

             I gave the iframe container an explicit hieght and that made it work. 

9/5 produced to website. many issues.
    when the notes animate, their allignment is wrong
    OR
    it doesnt animate




    9/6 more detailed analysis of website
        when I scroll down, animate works
        when I use link and scroll up, it doesnt work 
        when i use to go down, and link to go up, it doesnt work

        issue, the wrapper changing affects the children. need to use ems. 

        the grave img is fine
            the gravewrapper is too wide, and the 80% isnt working right. its worse if I dont correct that in the inspact element. theres also an overflow
            the  grave crosswrapper is too tall and too wide 


fixed by removing animate as part of the 80%
    i likely dont need the padding since other parts have padding 

    the font size was making the wrapper smaller. part of top,left, and postiion relative?
        only issue now is the width. maybe im make children articically smaller?



9/7 google lighthouse analysis
    mobile
        properly size images
            serve images in next-gen formats
                efficiently encoed images
                    reduce file size without compromising quality
    youtube vids can be lazy loaded
        img need explicit width and height
            page prevented back/fowrds cache restoration
                minimize mian-thread work
    html needs a lang attribute
    browser errors logged into console
    
    needs a meta description
    tap targets not sized best

desktop just had a ton of exclamation marks.

9/8 issue with the mismatch beyween the background and the grave image is that values like 80% width of 80%  width  are 64% of viewport because 
the width is based on the parent

besides the lighthouse, the only other issue is the triggering. it has something to do with triggering events. somehow, triggering on of the menu
buttons effects the animation

this doesnt affect the other fadeins, they triggger one the screen crosses paths with them. there is something different about it vs the other intersection observers.

the animation works just fine for mobile

BUT

i need to make the images more responsive to change. i think an issue is the padding
    fixed that

the disconnect and reconnect for the responsiveevent caused the issue



modified the last for loop



9/9 did a lot of changes for lighthouse
    made webp
    shrank images 
    lazy loaded
    used incognito
    meta description

the issue is different browsers.
    the code works on firefox and librewolf
        but not chrome opera and edge

flex operates far diferently with firefox vs other browsers
    the animated notes glitch for a split second