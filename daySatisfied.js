
startDate = "2026-01-01";
totalClasses = 20;
classWeekdays = [2, 4];
holidays = ["2026-01-01", "2026-01-20"];
holidayRanges = [{ NgayBD: "2026-01-25", ngayKT: "2026-02-03" }, { NgayBD: "2026-02-15", ngayKT: "2026-02-20" }];

const obj = {
    endDate: "",
    fullSchedule: []
};

function checkHoliday(curDate, holidays, holidayRanges) {
    const stringDate = curDate.toISOString().split('T')[0];

    if (holidays.includes(stringDate)) {
        return false;
    };

    for (const element of holidayRanges) {
        if (stringDate < element.NgayBD || stringDate > element.ngayKT) {
            return true
        };
        return false
    }

    return true;

}

function findAll(startDate, totalClasses, classWeekdays, holidays, holidayRanges) {
    let curDate = new Date(startDate);
    const fullSchedule = [];

    for (; fullSchedule.length < totalClasses;) {
        if (classWeekdays.includes(curDate.getDay()) && checkHoliday(curDate, holidays, holidayRanges)) {

            fullSchedule.push(curDate.toISOString().split('T')[0]);
        }

        curDate.setDate(curDate.getDate() + 1);

    }

    return fullSchedule;
};

obj.fullSchedule = findAll(startDate, totalClasses, classWeekdays, holidays, holidayRanges);
obj.endDate = obj.fullSchedule[totalClasses - 1];

console.log("holidays:", holidays);
console.log("holidayRanges:", holidayRanges);
console.log(obj);