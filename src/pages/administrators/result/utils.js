import { splitAssessment } from "../assessment/utils";

export const createResultSummaryReport = (result) => {

    const columns = getColumns(result);
    const { rows, year } = getRows(result, columns);

    return { columns, rows, year };
}

const getColumns = (result) =>  {
    const style = ""; //width: auto; overflow-wrap: break-word"; //min-width: 5px; max-width: 50px
    const columns = [];
    const subjectKeys = Object.keys(result);
    columns.push({ name: "subject", label: "SUBJECT", field: "", align: "left", scoreMax: 100, type: "text"})
    columns.push({ name: "totalScore", label: "TOTAL SCORE", field: "", align: "left", scoreMax: 100, type: "number"})
    columns.push({ name: "grade", label: "GRADE", field: "", align: "left", scoreMax: 100, type: "text"})

    for(const subjectKey of subjectKeys){
        
        const assessmentKeys = Object.keys(result[subjectKey].assessments);
        for(const assessmentKey of assessmentKeys){
            const { assessmentName } = splitAssessment(assessmentKey);
            const columnName = assessmentName.split(' ').join('');
            let column = columns.find(o => o.name === columnName);
            if(!column){
                columns.push({ 
                    name: columnName, 
                    label: assessmentName.toUpperCase(), 
                    field: "", 
                    align: "left",
                    scoreMax: result[subjectKey].assessments[assessmentKey].scoreMax,
                    type: "number" })
                    
            }
        }
    }

    return columns;
}

const getRows = (result, columns) => {
    const dp =  2;
    const rows = [];
    console.log("result: ", result)
    const subjectKeys = Object.keys(result);
    let year = "";
    let uniqueYears = [];

    for(const subjectKey of subjectKeys){
        const row = {};
        for(const column of columns){
            row[column.name] = undefined;
        }

        row["subject"] = subjectKey;
        row["totalScore"] = result[subjectKey].subjectScore.toFixed(dp);
        row["grade"] = result[subjectKey].grade;
        const assessmentKeys = Object.keys(result[subjectKey].assessments);
        for(const assessmentKey of assessmentKeys){
           const { assessmentName } = splitAssessment(assessmentKey);
           row[assessmentName.split(' ').join('')] = result[subjectKey].assessments[assessmentKey].assessmentScore.toFixed(dp);
           
           console.log("year: ", result[subjectKey].assessments[assessmentKey].year)
           const foundYear = uniqueYears.find(o => o === result[subjectKey].assessments[assessmentKey].year);
           if(!foundYear) uniqueYears.push(result[subjectKey].assessments[assessmentKey].year);
           
           
        }

        rows.push(row)
    }

    let i = -1;
    for(const uniqueYear of uniqueYears){
        i++;
        if(i == 0) year = year + `${uniqueYear}`
        else{
            year = year + `- ${uniqueYear}`
        }

    }
    

    return { rows, year };
}

export const createStudentsPositionReport = (result) => {

    const columns = getColumnsStudentsPositions(result);
    const rows = getRowsStudentsPositions(result, columns);

    return { columns, rows }
}

const getColumnsStudentsPositions = (result) => {

    const columns = [];
    if(result.length <= 0) return columns

    columns.push({ name: "userName", label: "USER NAME", 
    field: "", align: "left", scoreMax: result[0].overallScoreMax, type: "text" })
    columns.push({ name: "fullName", label: "FULL NAME", 
    field: "", align: "left", scoreMax: result[0].overallScoreMax, type: "text" })
    columns.push({ name: "overallScore", label: "OVERALL SCORE", 
    field: "", align: "left", scoreMax: result[0].overallScoreMax, type: "number" })

    for(const item of result){

        const subjectKeys = Object.keys(item.subjects);
        for(const subjectKey of subjectKeys){
            const columnName = subjectKey.split(' ').join('');
            let column = columns.find(o => o.name === columnName);
            if(!column){
                columns.push({ 
                    name: columnName, 
                    label: subjectKey.toUpperCase(), 
                    field: "", 
                    align: "left",
                    scoreMax: item.overallScoreMax,
                    type: "number" })
            }
        }
    }
    return columns;
}

const getRowsStudentsPositions = (result, columns) => {

    const dp = 2;
    const rows = [];

    for(const item of result){
        const row = {};
        for(const column of columns){
            row[column.name] = undefined;
        }

        row["fullName"] = item.fullName;
        row["userName"] = item.userName;
        row["overallScore"] = item.overallScore.toFixed(dp);

        const subjectKeys = Object.keys(item.subjects);
        for(const subjectKey of subjectKeys){
            row[subjectKey.split(' ').join('')] = item.subjects[subjectKey].subjectScore.toFixed(dp);
        }
        rows.push(row)
    }

    return rows;
}

export const createGrouppedSummaryResult = () => {

}

const getColumnsGrouppedSummaryResult = (result) => {

}

const getRowsGrouppedSummaryResult = (result, columns) => {
    
}