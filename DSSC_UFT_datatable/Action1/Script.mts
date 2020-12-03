'Parse the parameter list, replacing calls to Useful Functions (enclosed by '{' and '}' characters) with their appropriate equivalents 
strParam = Datatable.GetSheet("Global").GetParameter("Parameters").RawValue 
 msgbox TypeName(CInt(strParam))
'While inStr(strParam, "{") > 0 And inStr(strParam, "}") >0 
'strVarname =Mid(strParam, InstrRev(strParam,"{")+1,((Instr(InstrRev(strParam,"{"), strParam,"}"))-1) - InstrRev(strParam,"{")) '
'Datatable("Result","CommandParser") = "=""" & strVarname & """" 
'strParam = Replace(strParam, "{" & strVarname & "}", UsefulFunctions(Datatable("Result","CommandParser"))) '
'Wend 
'Datatable("Parameters", "CommandParser") = strParam 

