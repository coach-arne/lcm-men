import * as fs from 'fs';

export const fsReadFile = (path, encoding) => new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, contents) => {
        if (err) {
            reject(err);
        } else {
            resolve(contents);
        }
    });
});

export const fsWriteFile = (path, data) => new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err, contents) => {
        if (err) {
            reject(err);
        } else {
            resolve(contents);
        }
    });
});