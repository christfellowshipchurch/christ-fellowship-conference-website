export function guid() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export function hasProperty(o, p) {
    if (o && p) {
        if ((p in o) && o[p]) {
            return true;
        }
    }

    return false;
}

export function condense(str) {
    return str ?
        str.toLowerCase().replace(' ', '') :
        false;
}

export function strip(str) {
    return str ?
        str.toLowerCase().replace(/[^A-Za-z0-9]/g, '') :
        false;
}

export function randomBootstrapColor() {
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'yellow'];
    const index = randomInt(0, colors.length - 1);

    return colors[index];
}

export function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const breakoutsGroupId = "Group:c495ff18cd998ed516a798b6218907cd";