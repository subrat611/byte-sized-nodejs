### File handling in Node.js

- In Node.js, file handling is done using the built-in fs (File System) module. It allows you to work with the file system, such as reading, writing, deleting, and updating files.

### Basic operations with examples:

### 1. Importing the `fs` module

- To use the fs module, you need to import it at the beginning of your script:

```js
const fs = require('fs');
```

### 2. Reading files

- We can read file using either synchronous (readFileSync) or asynchronous (readFile) methods.

#### 1. Asynchronous Reading

- It doesn't block the execution while reading the file.

```js
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

#### `fs.readFile` method

- The fs.readFile() method in Node.js is used to asynchronously read the contents of a file.

`Syntax`
```js
fs.readFile(path, options, callback);
```

Parameters:

1. `path` (required)

- The file path to be read. It can be a string, a [Buffer](#buffer), or a URL object.
- Example values:
    - `'./example.txt'` (relative path)
    - `'/home/user/docs/file.txt'` (absolute path)

2. `options` (optional)

- It specifies the encoding and/or flag of the file to be read.
- It can either be a string (specifying the encoding) or an object with the following properties:

    - `encoding`: The character encoding to use when reading the file. If not specified, the data will be returned as a [Buffer](#buffer). Common values are `'utf8'`, `'ascii'`, or `'base64'`.
    - `flag`: A string indicating the file system flag, which specifies how the file should be opened. Default is `'r'` (read).

        - Common flags:
            - `r`: Open file for reading. An exception occurs if the file does not exist.
            - `r+`: Open file for reading and writing. An exception occurs if the file does not exist.
            - `rs+`: Open file for reading and writing in synchronous mode.

- Example:

    - `utf8` (as a string for encoding)
    - `{ encoding: 'utf8', flag: 'r' }` (as an object)

3. `callback` (required)

- A function that is called when the file reading operation is complete.
- It takes two arguments:
    - `err`: An error object if an error occurs while reading the file. If no error occurs, it will be `null`.
    - `data`: The content of the file. If an encoding is specified, it will be a string; otherwise, it will be a `[Buffer](#buffer)`.

#### 2. Synchronous Reading: 

-  It blocks execution until the file is read.

```js
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
```

### 2. Writting files

#### 1. Asynchronous Writting 
- In asynchronous we uses `fs.writeFile()` method that writes data to a file asynchronously, which means it does not block the execution while the file is being written.

```js
const fs = require('fs');

fs.writeFile('example.txt', 'Hello, world!', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File has been written successfully');
});
```

- Parameters:
    - `path`: The file path where the content should be written (e.g., 'example.txt').
    - `data`: The content to write to the file (can be a string, Buffer, or Uint8Array).
    - `callback`: A function that executes once the write operation is complete. It takes an err parameter that will be null if the operation succeeds.

#### 2. Synchronous Writting
- In synchronous we uses `fs.writeFileSync()` method that writes data to a file synchronously, blocking the execution until the file has been completely written.

```js
const fs = require('fs');

try {
  fs.writeFileSync('example.txt', 'Hello, world!');
  console.log('File has been written successfully');
} catch (err) {
  console.error('Error writing to file:', err);
}
```

### 3. Appending Files

#### 1. Asynchronous Appending
- In asynchronous appending, we use the fs.appendFile() method that adds data to the end of a file asynchronously, without blocking the execution.

```js
const fs = require('fs');

fs.appendFile('example.txt', '\nThis is appended text!', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Text has been appended successfully');
});
```

- Parameters:
    - `path`: The file path where the content should be appended (e.g., 'example.txt').
    - `data`: The content to append to the file (can be a string, Buffer, or Uint8Array).
    - `callback`: A function that executes once the append operation is complete. It takes an err parameter that will be null if the operation succeeds.

### 2. Synchronous Appending
- In synchronous appending, we use the fs.appendFileSync() method, which adds data to a file synchronously, blocking the execution until the operation is complete.

```js
const fs = require('fs');

try {
  fs.appendFileSync('example.txt', '\nThis is appended text!');
  console.log('Text has been appended successfully');
} catch (err) {
  console.error('Error appending to file:', err);
}
```

### 4. Deleting Files

#### 1. Asynchronous Deleting
- In asnchronous deletion, we use the fs.unlink() method to delete a file asynchronously, meaning it doesn't block the execution while the file is being removed.

```js
const fs = require('fs');

fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File has been deleted successfully');
});
```

- Parameters:
    - `path`: The file path to delete (e.g., 'example.txt').
    - `callback`: A function that executes once the deletion operation is - - complete. It takes an err parameter that will be null if the operation succeeds.

#### 2. Synchronous Deleting
- In synchronous deletion, we use the fs.unlinkSync() method, which deletes the file synchronously, blocking execution until the file is removed.

```js
const fs = require('fs');

try {
  fs.unlinkSync('example.txt');
  console.log('File has been deleted successfully');
} catch (err) {
  console.error('Error deleting file:', err);
}
```

### 5. Renaming Files

#### 1. Asynchronous Renaming
- In asynchronous renaming, we use the fs.rename() method to rename or move a file asynchronously, without blocking the execution.

```js
const fs = require('fs');

fs.rename('example.txt', 'newName.txt', (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }
  console.log('File has been renamed successfully');
});
```

- Parameters:
    - `oldPath`: The current file path (e.g., 'example.txt').
    - `newPath`: The new file path (e.g., 'newName.txt').
    - `callback`: A function that executes once the rename operation is complete. It takes an err parameter that will be null if the operation succeeds.

#### 2. Synchronous Renaming
- In synchronous renaming, we use the fs.renameSync() method, which renames or moves the file synchronously, blocking execution until the operation is complete.

```js
const fs = require('fs');

try {
  fs.renameSync('example.txt', 'newName.txt');
  console.log('File has been renamed successfully');
} catch (err) {
  console.error('Error renaming file:', err);
}
```

### Buffer:
- In Node.js, a Buffer is a built-in global object that provides a way to work with binary data directly. 
It is primarily used to handle raw data, such as reading or writing files, handling network packets, or manipulating binary [streams](#stream). 

### Stream:
- In Node.js, a stream is a powerful abstraction that allows handling and processing data in a continuous flow. 
It is used to work with data that can be read from or written to a source over time, rather than loading the entire data set into memory at once. 

