Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon

AppContext.Navigate DataTable.Value("URL")													'Navigate to the application URL
AppContext.Sync																			'Wait for the browser to stop spinning
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application

AIUtil.FindTextBlock("SPEAKERS").Click
AIUtil.FindTextBlock("Bose Soundlink Bluetooth Speaker III").Click
