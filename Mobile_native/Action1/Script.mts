Set AppContext=Device("Device")
'AppContext.Sync																			'Wait for the browser to stop spinning
AIUtil.SetContext AppContext		

AIUtil("hamburger_menu").Click
AIUtil.FindTextBlock("SPEAKERS").Click
AIUtil.FindTextBlock("Bose Soundlink Bluetooth").Click


