import XLSX from 'xlsx';

export default function read_excel(file_path,sheet_name)
{
    let workbook=XLSX.readFile(file_path);
    let worksheet=workbook.Sheets[sheet_name];
    return XLSX.utils.sheet_to_json(worksheet);
}