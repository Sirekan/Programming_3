class LivingCreature {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
    }
    cord() {
        this.cords = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        return this.cords;
    }
    cordTrue(t) {
        var ret = this.cord();
        var trueCord = [];
        for (var i = 0; i < ret.length; i++) {
            if (ret[i][0] <= (matrix[0].length - 1) && ret[i][0] >= 0 && ret[i][1] <= (matrix.length - 1) && ret[i][1] >= 0) {
                if (matrix[ret[i][1]][ret[i][0]] == t) {
                    trueCord.push(ret[i]);
                }
            }
        }
        return trueCord;
    }
}
