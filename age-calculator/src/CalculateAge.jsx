import { DateTime } from 'luxon';

const CalculateAge = (birthdate) => {
    var err = ''
        const start = DateTime.fromFormat(birthdate, "dd/MM/yyyy");
        const end = DateTime.now();
        var diff = end.diff(start, ['years','months', 'days']);

        if (isNaN(diff.years) || isNaN(diff.months) || isNaN(diff.days)) {
            err = "Incorrect input! Please try again";
        }

    return [diff.toObject(), err];
}
 
export default CalculateAge;