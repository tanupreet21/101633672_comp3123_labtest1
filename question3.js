/**
 *Create a script that will do the following:
    1. Remove Log files
        o remove all the files from the Logs directory, if exists
        o output the file names to delete
        o remove the Logs directory
    2. Create Log files
        o create a Logs directory, if it does not exist
        o change the current process to the new Logs directory
        o create 10 log files and write some text into the file
        o output the files names to console
Hint: use the fs module and path module, and the process current
working directory to build directory path. It is acceptable, to have a
remove.js script and separate add.js script.
 */

var fs = require('fs');
var path = require('path');

//Define Logs directory path
const dir = path.join(__dirname, 'Logs');

//Create Logs folder if it doesn't exist
if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

//Change working directory to Logs
process.chdir(dir);

//Create 10 log files and write some text into them
const numOfFiles = 10;
const created = [];
for(let i=0; i<numOfFiles;i++){
    const file = `log${i}.txt`;
    fs.writeFileSync(file, `This is log ${i} file`);
    created.push(file);
    console.log(file);
}

if(fs.existsSync(dir)){//Check if directory exists
    const logFiles = fs.readdirSync(dir);//read all files

    if(logFiles.length > 0){//Check if there're files, then delete
        //Remove log files
        for(let i=0; i<created.length;i++){
            fs.unlinkSync(created[i]);
            console.log(`delete files...log${i}.txt`);
        }

        //move back to parent directory and remove Logs directory
        process.chdir('..');
        fs.rmdirSync(dir);
    }
}
