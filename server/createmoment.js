Platform.Load("core", "1");
var myFolder = Folder.Init("myFolder");
var myIDFolder = Folder.Init();
myIDFolder.SetID(12345);
var newFolder = {
    "Name": "Test Add Folder",
    "CustomerKey": "test_folder_key",
    "Description": "Test added",
    "ContentType": "email",
    "IsActive": "true",
    "IsEditable": "true",
    "AllowChildren": "false",
    "ParentFolderID": 123456
};
var status = Folder.Add(newFolder); 