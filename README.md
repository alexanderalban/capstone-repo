# Capstone-Pitch
Capstone Pitch for ACA 211

1. What problem do you want to solve?
- Now, more than ever, online security is crucial. Our whole lives are online these days. However, as per digitalguardian.com (https://digitalguardian.com/blog/uncovering-password-habits-are-users-password-security-habits-improving-infographic), 61% of people reuse passwords across multiple services. 44% of people reported that they changed their passwords once a year or less, and a similar statistic shows that 44% of users report that they don't use complex passwords or passphrases. Considering that (in the US) the average email address is associated with 130 accounts, thats 130 points of vulnerability for your email alone. That's terrifying. 

2. Enter the new application, PassTime. In PassTime, users will learn to create and memorize complex passwords, and can train their brains to retain more complex information. The best part? You do this by using passwords to fight monsters and save cities. 

Seriously.

When you fist sign up for app, you will create a character and join the Password Attack Super Squad That Investigates Many Enemies, or PassTime for short.  As a member of PassTime, your job is to fight enemies who are wreaking havoc across dimensions: breaking into peoples accounts, taking their possessions, destroying cities, and generally being really unpleasant dudes.

When fighting these bad guys, you will be provided attacks by PassTime HQ (which happen to be totally cool and secure password strings), and you will need to type in these names in order to attack.  Attack the enemies enough times and you will save the city! (And also get better at memorizing very secure passwords. Whichever you're going for).

This brain training application will be designed to be educational, fun, and not feel like a test. By logging in once a day and defending the city (roughly 10-12 minutes), our users will learn best practices for creating passwords, as well as how to memorize their passwords more effectively. There is also the Training Room, where users can enter a password that they want to memorize (which is NOT saved anywhere in the PassTime system!), and attack training dummies using their passwords! Practice makes perfect (and protects the people of Earth) in PassTime!




Application Plan!

1. What does it look like to the user?
-Ideally, the login screen will feature a splash screen of a PassTime member running towards a monster, with the title PassTime at the top and a sign-in button in the middle.

2. How do they sign in?
-The user will sign in using the sign-in button, using a username and password. Ideally I would like to also incorporate a Two-Factor Authentication, to introduce the user to this concept and encourage them to use it whenever possible.

3. What page will they arrive at once they do sign in?
-This page will include five things:
I. Their daily streak at the top, showing how many days in a row they have signed in and fought monsters

II. The option to go fight monsters

III. The training room to practice passwords

IV. A sign out button

V. A button to adjust user settings

4. What tasks can they do from that page?
They can go to the Fight Monsters section, or go to the Training Room to practice passwords, go to the settings menu, or log out

5. What do the pages look like?

I. The Daily Streak will ideally provide a leader board with the top streak scores of all users.

II. The Fight Monsters section will include a screen with the user's avatar on the left, and the monster on the right. The Password Attack will appear on the top of the screen for a few seconds, then disappear. The user will then be able to type in the password in a "speech bubble" for their avatar. When they defeat a monster it will fade, being replaced with another monster. When they are all defeated, a victory screen will appear and the user will be returned to the previous menu.

III. The Training Room will show the user's avatar on the left and a training dummy on the right, similar to the Fight Monsters section. The user will enter the password they want to memorize, and it will go through the fight sequence (password shown on top, and then entered by user multiple times). It will then prompt the user to enter another/the same password again to repeat the sequence (no password will be stored)

IV. Sign out button will simply ask if they are sure, and upon confirmation will return them to the main menu. On mobile it may close the app if the user chooses that option in the settings

V. Settings will allow the user to change their password, set up 2FA, and delete their account if they choose to do so.

6. What data can they fetch from there?
-When fighting monsters they will receive randomly generated password strings that they will type in to defeat them. On the leader board they will see the daily streaks of the top scorers.

7. What would a typical login, do task(s), logout experience look like?
I. Open the app
II. Sign into user account
III. Check Leader Board (optional)
IV. Select Fight Monsters
V. Go through the process of defeating monsters using randomly generated passwords
VI. Win Screen/Loss Screen
VII. Memorize a new password in the Training Room (optional)
VIII. Sign out

8. How do they sign out?
-Click the sign-out button, select "Yes" when prompted "Are you sure?"


Questions I have-
1. How can I incorporate an API into this? For security reasons, it may need to be mostly self-contained.

2. How can I maintain a leader board? Will maintaining databases like this be covered in the next section?