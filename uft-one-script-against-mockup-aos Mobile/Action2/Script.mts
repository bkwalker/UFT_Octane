﻿Dim BrowserExecutable, rc

''ExitAction																					'Comment out this line if you want this action to actually run
'While Browser("CreationTime:=0").Exist(0)   													'Loop to close all open browsers
'	Browser("CreationTime:=0").Close 
'Wend
'BrowserExecutable = DataTable.Value("BrowserName") & ".exe"
'SystemUtil.Run BrowserExecutable,"","","",3												'launch the browser specified in the data table
'Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon


'AppContext.ClearCache																		'Clear the browser cache to ensure you're getting the latest forms from the application
'AppContext.Navigate DataTable.Value("URL")												'Navigate to the application URL
'AppContext.Maximize																		'Maximize the application to give the best chance that the fields will be visible on the screen
'AppContext.Sync																			'Wait for the browser to stop spinning
'AIUtil.SetContext AppContext	  																'Tell the AI engine to point at the application

AIUtil.SetContext BROWSER("Browser")

'===========================================================================================
'BP:  View products from home page
'===========================================================================================
AIUtil.FindTextBlock("Speakers").Click
AIUtil.FindTextBlock("pvantageDEMO").Click

'===========================================================================================
'BP:  Login
'===========================================================================================
AIUtil("profile").Click
rc = AIUtil("input", "Username").Exist
'altnernatively, you could use AIUtil("input", "Username").Highlight
AIUtil("input", "Username").Type "aidemo"
AIUtil("input", "Password").Type "AIdemo1"
AIUtil("button", "Sign In").Click

'===========================================================================================
'BP:  Logout
'===========================================================================================
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign out").Click

AppContext.Close																			'Close the application at the end of your script

