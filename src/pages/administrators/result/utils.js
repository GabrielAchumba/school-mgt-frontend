export const createResultSummaryReport = (result) => {

    const columns = getColumns(result);
    const rows = getRows(result, columns);

    return { columns, rows };
}

const getColumns = (result) =>  {

    const columns = [];
    const subjectKeys = Object.keys(result);
    columns.push({ name: "subject", label: "SUBJECT", field: "", align: "left" })
    columns.push({ name: "totalScore", label: "Total Score", field: "", align: "left" })

    for(const subjectKey of subjectKeys){
        
        const assessmentKeys = Object.keys(result[subjectKey].assessments);
        for(const assessmentKey of assessmentKeys){
            let column = columns.find(o => o.name === subjectKey);
            if(!column){
                columns.push({ name: assessmentKey, label: assessmentKey.toUpperCase(), field: "", align: "left" })
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
            row[assessmentKey] = result[subjectKey].assessments[assessmentKey];
        }
        rows.push(row)
    }

    return rows;
}