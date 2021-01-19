Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AppContext.Sync																			'Wait for the browser to stop spinning
AIUtil.SetContext AppContext		

AIUtil("hamburger_menu").Click
AIUtil.FindTextBlock("SPEAKERS").Click
AIUtil.FindTextBlock("Bose Soundlink Bluetooth").Click

