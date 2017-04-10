'use strict';

const path = require('path');

class fileDataManager{

    byExtension (fileName) {
        let data;
        let ext = path.extname(fileName);
        if (ext === '.properties') {
            data = this.loadPropertiesFile(fileName);
        }
        else if (ext === '.csv') {
            data = this.loadCsvFile(fileName);
        }
        else if (ext === '.json') {
            data = this.loadJsonFile(fileName);
        }
        else if (ext === '.yml') {
            data = this.loadYmlFile(fileName);
        }
        else if (ext === '.xlsx') {
            data = this.loadXlsxFile(fileName);
        }
        return data;
    };

    loadPropertiesFile (fileName){
        //TODO: implement me
        // probably you want to use https://www.npmjs.com/package/properties
        return 'data from properties file';
    }

    loadCsvFile (fileName){
        //TODO: implement me
        // probably you want to use https://www.npmjs.com/package/node-csv
        return 'data from csv file';
    }

    loadJsonFile (fileName){
        return require(path.resolve(fileName));
    }

    loadYmlFile (fileName){
        //TODO: implement me
        // probably you want to use https://www.npmjs.com/package/js-yaml
        return 'data from yml file';
    }

    loadXlsxFile (fileName){
        //TODO: implement me
        // probably you want to use  https://www.npmjs.com/package/xlsx
        return 'data from xlsx file';
    }
}

module.exports = new fileDataManager();