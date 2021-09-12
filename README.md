
### 1. To generate "TypeScript" config file use below command.

`tsc -init`

### 2. To compile single typescript file use below command.

`tsc filename.ts`

### 3. To compile multiple typescript file use below command.

`tsc`

### 4. To compile multiple typescript file in watch mode then use below command.

`tsc --watch`

### OR ...

`tsc -w`

### 5. To exclude any file or folder from compile process, add below code of your tsconfig.json file.

#### After 'compilerOptions' object just add array with key name called "exclude: []".

`"exclude:["filename.ts", "folder_name"]"`

### 6. To exclude any specific file or folder from compile process, add below code of your tsconfig.json file.

`"exclude:["specific_filename.ts", "specific_folder_name"]"`

### OR ... you want to exclude specific file from specific folder then.

`"exclude:["specific_folder_name/specific_filename.ts"]"`

### 7. To exclude same named file from all folders where it is exist from compile process, add below code of your tsconfig.json file.

#### Use '*/' and the 'file_name.ts'.

`"exclude:["*/same_named_file.ts"]"`

### 8. To compile your '.ts' file into specific JavaScript version (For Example : es5, es6 etc.) Then change 'target' key located at tsconfig.json file to the specific version let's say 'es6'. By default it is 'es5'.

For Example :- Change || Replace `"target": "es5"` (Default)  With `"target": "es6"`.

### 9. To change JavaScript files directory, find the option called 'outDir' in tsconfig.json file. And then replace default location with your desire folder location.

For Example :- Change || Replace `"outDir": "./"` (Default) with `"outDir": "your_desire_folder_name_with_correct_path"`.

### 10. Also check for "Additional Type Checking" option for code enhancement. These option you can get through tsconfig.json file.

#### Please check 'tsconfig.json' file for bunch of available option for code enhancement (strict type checking options to avoid errors).

