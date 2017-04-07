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

    loadPropertiesFile (){
        //TODO: implement me
        return 'data from properties file';
    }

    loadCsvFile (){
        //TODO: implement me
        return 'data from csv file';
    }

    loadJsonFile (){
        //TODO: implement me
        return 'data from json file';
    }

    loadYmlFile (){
        //TODO: implement me
        return 'data from yml file';
    }

    loadXlsxFile (){
        //TODO: implement me
        return 'data from xlsx file';
    }
}

module.exports = new fileDataManager();