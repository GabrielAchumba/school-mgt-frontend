export const createResultSummaryReport = (result) => {

    const columns = getColumns(result);
    const rows = getRows(result, columns);

    return { columns, rows };
}

const getColumns = (result) =>  {

    const columns = [];
    const subjectKeys = Object.keys(result);
    columns.push({ name: "subject", label: "SUBJECT", field: "", align: "left", scoreMax: 100 })
    columns.push({ name: "totalScore", label: "TOTAL SCORE", field: "", align: "left", scoreMax: 100 })

    for(const subjectKey of subjectKeys){
        
        const assessmentKeys = Object.keys(result[subjectKey].assessments);
        for(const assessmentKey of assessmentKeys){
            const columnName = assessmentKey.split(' ').join('');
            let column = columns.find(o => o.name === columnName);
            if(!column){
                columns.push({ 
                    name: columnName, 
                    label: assessmentKey.toUpperCase(), 
                    field: "", 
                    align: "left",
                    scoreMax: result[subjectKey].assessments[assessmentKey].scoreMax })
            }
        }
    }

    return columns;
}

const getRows = (result, columns) => {

    const rows = [];
    const subjectKeys = Object.keys(result);
;
    for(const subjectKey of subjectKeys){
        const row = {};
        for(const column of columns){
            row[column.name] = undefined;
        }

        row["subject"] = subjectKey;
        row["totalScore"] = result[subjectKey].subjectScore;
        const assessmentKeys = Object.keys(result[subjectKey].assessments);
        for(const assessmentKey of assessmentKeys){
            row[assessmentKey.split(' ').join('')] = result[subjectKey].assessments[assessmentKey].assessmentScore;
        }
        rows.push(row)
    }

    return rows;
}