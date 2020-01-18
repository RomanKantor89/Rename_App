BTH RenameAPP  

Group Members:   
●	Arshdeep Singh  
●	Roman Kantor  
●	Chaoyi Wu  
●	Chenming - Xu  
●	Jeasung Chun  


To begin with, we would like to mention that the interactive version of our design can not resemble the actual design of our program due to the limitations of the visual interactive software that is currently available on the market such as Adobe XD or any equivalent. Unfortunately these tools do not support the “drag and drop”  and the “on hover” features to the extent that we would like to use them in our software. Therefore, we have decided to use Adobe XD for the design's visual presentation aspect, we will be explaining the interactive parts of our design thoroughly throughout this document.

## Overview  
Certain ideas that are implemented throughout the design. There is a lot of reuse of design elements and resources. Therefore, choices made throughout the design are explained in this section.  
*	Colour -  
    *	We used the colour [#636BFF] to signify UI elements that are highly interactive and/or animated. Our side menu is collapsable on the left and is coloured in [#636BFF]. As well as our draggable elements such as buttons that give visual feedback when clicked. When the side pane is collapsed, a minimized filename preview comes into view from the right. It has information presented in tabs Old and New. The horizontal line below the tab text moves when the tabs are switch and thus, it is also purple. Similarly, the animated percentage visual is [#636BFF] in colour. Likewise, the whole left section of the save and select windows slide into view from top when the window is initialized. This section is also in [#636BFF] colour.   
    * Disabled, inactive or lower priority items are usually lighter in colour. Inactive menu items in the side menu are lighter colour against the background. Disabled draggable elements and icons use the colour [#C4C4C4] as light gray is conventionally used to signify disabled items. Information icons next to draggable elements or input fields are also a light shade of gray (to signify lower priority), disabled information icons will simply not be shown.
    * The colour white is mostly used contrastingly against a background and to give a sense of space.
    * The colour [#525252] is used to signify static UI elements that are sometimes clickable.  
*	Fonts -   
    * We chose the font Dubai throughout the UI design, as it supports light, regular and bold font weights. It also supports sans-serif which is great for titles and regular text on sufficiently large screen (desktop applications). Lighter weight is used for section headings and tooltip text, regular weight for regular text and window headings, and bold for active text (active menu item).
*	Graphical Elements -
    *	This design has an extensive use of icons from the material library. These icons are self explanatory but will show more information as a mouse tooltip when hovered over.

### Select Files

<img src="https://github.com/RomanKantor89/Rename_App/blob/master/images/Select.png">  

**Overview**  
This interface will be what the user sees when they start the application. 
Interface Layout:  
*	The interface is divided into three sections: grid layout for displaying the current folder the user is in and the files they can choose from, list layout to display selected files, and a panel for other settings and filters used in selecting.
*	The grid layout is very commonly used to navigate through folders and view files and one that any user will be very familiar with. It will be easy for the user to select files and navigate.
*	The list layout is used because the user can see the exact paths of the files selected. In the case files under different folders are selected, the user knows where the files are from.

To select multiple files, user should click on each file. The selected files will be highlighted on the left side and displayed in a list format on the right side.

To deselect a file, the user simply needs to click on it again - either on the file on the left side or in the list on the right side.

Double clicking on a folder will move the user into that folder. This does not affect files that are already selected.

The arrows next to the path box let the user navigate between different folders and work the same as a file explorer window.

If “recursive selection” is checked, when the user clicks on a folder, the application automatically selects all the files within the selected folder as well as its subfolders.

“Regex selection” lets the user enters a regular expression which will be used to select all the files matching the expression. This applies also when “recursive selection” is applied, although the user will still have to select which folder they want to include. Below the text box, there are some suggestions for commonly used regular expressions. The application will display an explanation when the user hovers over them. The refresh button on the top right lets the user get a new group of recommendations. 

When the user is satisfied with the selection, they need to click on “Select” to move on to renaming.

### Renaming Files

**Overview**  
Once the files are selected and the user clicked Select button on the “Selection window”, the user will see a new window open up for editing the names of those selected files.  
Interface Layout:  
*	We used a side menu layout, which is extremely standard among desktop sized applications.
*	Dividing each window into two sections, a menu and dashboard area allow for clear distinction between sections.
    *	The menu has a natural flow from top to bottom as we go through the renaming process which ends at the preview.
    *	The menu is collapsible which allows for more space and the addition of a live preview window of filenames. This window is tabbed due to limited space but can be expanded quickly with the click of a button. Tabbing allows for presenting more data in less space.
*	The dashboard is split into two sections, a filename builder that stays in a fixed position in every menu navigation item in rename except for preview, and a section for draggable elements configuration and creation. This provides a clear distinction in the user’s mind as well as a subconscious understanding that there is an upload flow of content from bottom to top.  

**main rename window**
<img src="https://github.com/RomanKantor89/Rename_App/blob/master/images/Main%20Rename%20Window.png">  

The first screen opens automatically on the editor where you can remove characters from the existing file names by hovering over the characters and clicking on the “garbage bin” icon or the information icon that will display a pop up which will have information about the usage of the characters. There is also a general (information) icon that explains the usage of current screen, which will prevent our users from making obvious mistakes.

The grey back arrow indicates the undo action which will revert any actions that are done by the user, such as removal of the character. It will give the user more confidence to explore our application and try out all the features of the application. 
The user is able to use the navigation menu by clicking on the “>” on the bottom left of the window.

Usage explanation based on a case: if the user decides to remove the 3rd character in all the files, they need to hover over “L” and click the “garbage bin” icon. The 3rd character in files would start counting from the left side. If a file has a name that is shorter than 3 characters then no characters will be removed. If file name consists only of one character and the first character was asked to be removed by the user, then the file will remain unchanged since the file cannot be without a name.

**Filename minimized pane’s “New” tab and disabled button**  
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Main%20Rename%20Window%20%E2%80%93%20New%20preview.png">  

As shown on the image above the “Filename” section on the right has a preview of the selected original files and the tab can be switched to the New to preview the changes. If no changes were done yet the user will not be able to click the save button as shown on the image above.

**Rename based on input string**  
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/String.png">    

Once the navigation slide is open, the “Filename” window on the right is hiding. As shown on the image above the user selects the string editor tab from the navigation menu. 

### Fixed Strings
To add a fixed string to the selected file names, the user inputs the string into the input field as seen on the screenshot and presses enter when done. The program generates a small draggable item with the string inside of it as we can see on the screenshot above.   
The user is able to add a string to the file name by dragging the element with the blue border into between the characters of the filename template. This newly added string to the file template will also have a tooltip when hovered on in case the user would like to remove it.  
The user can close the navigation menu to bring back the preview on the right side or the user can click on the preview button that is seen on the screenshot above to open a new full preview window as seen on the image below.

**Rename preview window**
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Preview.png">    

From the preview window the user can save the results if he is satisfied, or click on the grey “<” button on the top to go back to the last editing option so if the user clicked preview from the string editor that's where the back button will take the user.

If the user would like to select other editing features he can go to other editors without affecting the current changes to the filename template.
The idea is to have the upper and lower sections of the window independent from each other in terms of navigation. The navigation will refresh only the lower part of the window.



### Arbitrary numeric sequences  
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Incrementing%20number.png">  

Once the user clicks on the Numeric Seq. in the navigation menu, the lower section of the window where the editing happens is changed to display different editing options as shown on the screenshot above. Since this feature requires some explanation, there is an “i” icon beside each field to give user more information on how to use each field. 
“Start Number” (i) - Please enter a number that you would like to start the sequence at(Mandatory).
“Max. Digits” (i) - Please enter the maximum amount of digits for the sequence. If entered 3 the maximum will be 999 (optional).
“Increment Size” (i) - Please enter the amount you would like to increment each time. If 2 entered the sequence will increment each time by 2.(Optional)

Since the program is very forgiving and any changes can be easily undone, it will encourage the user to test it and understand how it works better. The "Information" icon that is darker is meant to attract users attention more than the other information icons since the former icon has a general explanation on this features usage. If the Start number not entered the Seq item will be not draggable and will be faded color to indicate that it can not be used yet. After the Start number is entered the Seq item will have a blue border as shown on the image above to indicate its interactivity.


### GPS Information  
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/GPS.png">  

If the user selects GPS information from the navigation bar, the lower section of the window where the editing happens is changed to display different editing options related to GPS information.

The GPS information is stored in the 4 draggable elements “Latitude”, “Longitude”, “Country” and  “City”. Each of these 4 data pieces will save the information of its own image and apply to its own file name if dragged into the filename. 

For example:  
If the element “Country” is dragged between characters “L” and “E” and there are 2 images selected. First image’s name is “Cool” and its from Canada and the second file name is “Awesome” and its from England. Files will be renamed in the following way: First - “CooCanadal”, Second - “AweEnglandsome”   

If Latitude or Longitude was applied to the filename and either of the values is corrupted for a specific file, that file will remain unchanged and an information window will inform the user by the end of the process that a certain file name was not changed.

### Parts of Original Names  
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Original%20Name.png">  

The user can use parts of the original file to rename the file. Navigating to “Original Name” on the side menu reveals the pane shown above.
The section titled “Filename Builder” works the same way as in other panes of the Rename side menu.  
In the section titled “Original Filename Parts” the user can drag and drop characters of the original filename (as elements) into the file builder. The user can also select multiple characters with a mouse click and drag action as well as using the ctrl. and shift. shortcut key select functionality.  
The user can also click on the "Information" icon next to “Original Filename Parts” to get a simple explanation of the pane.

### Using Capture groups
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Capture%20Groups.png">  

The user can also use parts of the original file captured in the selection regex capture groups to rename the file. Navigating to “Capture groups” on the side menu reveals the pane shown above.  
The section titled “Filename Builder” works the same way as in other panes of the Rename side menu.  
In the section titled “Regex Capture Groups” the user can drag and drop elements, that hold the value of the characters of the original filename selected as a capture group, into the file builder. Right of the drag and drop elements is the complete regex as text, with the capture group of the drag and drop element highlighted.  
The user can also click on the "Information" icon next to “Regex Capture Groups” to get a simple explanation of the pane.

### File Metadata  
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/File%20Data.png">  

The user can use a file’s properties such as last modified date, size etc. to rename the file. Navigating to “File data” on the side menu reveals the pane shown above.  
The section titled “Filename Builder” works the same way as in other panes of the Rename side menu.  
In the section titled “File Data (Meta data)” the user can drag and drop elements, that hold the value of file properties such as last modified date, into the file builder. Right of the drag and drop elements is a button that switches between different formats of the presented data (If applicable). For example, clicking the switch button next to “Modified Day (Fri.)” will change it to “Modified Day (Friday)” and then back.  
The user can also click on the "Information" icon next to “File Data (Meta data)” to get a simple explanation of the pane.
 
### Renaming date  
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Current%20Date%20%E2%80%93%201.png">  

The user can use the renaming date and time properties such as day, month etc. to rename the file. Navigating to “Date” on the side menu reveals the pane shown above.  
The section titled “Filename Builder” works the same way as in other panes of the Rename side menu.  
In the section titled “Renaming Time and Date” the user can drag and drop elements, that hold the value of date and time properties such as Year, into the file builder. Right of the drag and drop elements is a button that switches between different formats of the presented data (If applicable). For example, clicking the switch button next to “Day (Fri.)” will change it to “Day (Friday)” and then back.  
The user can also click on the "Information" icon next to “Renaming Time and Date” to get a simple explanation of the pane.  
 
**Filename builder with an element inserted**
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Current%20Date%20%E2%80%93%201.png">  

When an element is dragged to the filename builder, as the user moves it between characters, the existing string of characters part. Dropping the element at that point sets it in place and that element is now going to be used for renaming. The original element is recreated when an element is dragged away from its position in the bottom pane.  
Just like the characters in the original string, you can click on individual elements to see a tooltip with two actions (delete and information). The user can also drag the elements away to unset it from the filename builder and follow the same process as bringing an element into the filename builder. Dropping an element anywhere other than in between the characters/elements of the filename will make it disappear.  

### Saving files - As a copy, Into a different folder, Into current folder

**Overview**  
The last step is saving your progress. After users click the save button in renaming process. The system will bring the user to the saving page. The main page of saving process is below. The left part showing the selection result. And the right part will show the renaming result. Both part has navigation bar which let users see different directory. At the bottom, the cancel and save function is provided for user. The cancel function will bring the user back to renaming process and the save button will start the renaming process.  
The applications use pop-up window to deal with the saving process. The reason is that the pop windows can grab users attention easily and inform the user about the current progress. 
 
**Save window**  
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Save.png">  

### Work In Progress
When user clicks the save button, a pop window showing the percentage of the progress will show up. Users are still be able to cancel the progress by clicking the cancel button at the bottom of the pop up window. It will rollback all the works which have been done so far, and bring back users to the previous screen.
   
**Saving progress feedback popup**  
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Work%20in%20Progress.png">  


**Conflict**  
When a file already exists in the destination directory, the pop up window will show up and let the user decide what to do with this file. There are three options for it, which are overwrite file, skip file and cancel rename. Overwriting files will replace the original files with the renamed files.  
Skipping file will not replace the current file and keep doing the renaming. Canceling rename will bring the user back to the previous screen and undo any changes made in the file system. There is a check box which will let users do the same option for the rest naming. When user finish the selection, users can click the done button which will let the system do the background work.
  
**File already exists pop-up**  
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/File%20name%20already%20exists.png">  


**Invalid file**  
If the background meets some files with an invalid value during the renaming process, a window will pop up showing the error message and it will also let user decide what to do with that file. Users can open the corrupted file in the file explorer, skip the file altogether or cancel the renaming process altogether.
   
**File has invalid value pop-up**
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Invalid%20longitude%20value.png">  

**Complete page**    
When all the renaming progress are done at the background, the pop up window will show up telling users that the work is done and saved . There are two options for the popup. The done button will bring user back to the select page and user will be able to start another work load. And the second option is open in explorer, which will open the windows file explorer.

**File rename complete pop-up**
<img src="https://github.com/RomanKantor89/UI-UX/blob/master/Rename%20App/images/Successfully%20renamed.png">  



