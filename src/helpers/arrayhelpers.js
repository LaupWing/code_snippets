export default class ArrayHelpers{
     /**
    * Shuffles array in place.
    * @param {Array} a items An array containing the items.
    */
    static shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    static removeDuplicates(array){
        return array.filter(function(item, pos) {
            return array.indexOf(item) === pos;
        });
    }
}