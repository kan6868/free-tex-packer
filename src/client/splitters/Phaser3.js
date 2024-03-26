import Splitter from "./Splitter";

class Phaser3 extends Splitter {
    static check(data, cb) {
        try {
            let json = JSON.parse(data);
            cb(json && json.textures && Array.isArray(json.textures));
        } catch (e) {
            cb(false);
        }
    }

    static split(data, options, cb) {
        let res = [];

        try {
            let json = JSON.parse(data);

            for (let texture of json.textures) {
                for (let item of texture.frames) {
                    item.name = Splitter.fixFileName(item.filename);
                    res.push(item);
                }
            }
        } catch (e) {}

        cb(res);
    }

    static get type() {
        return "Phaser 3";
    }
}

export default Phaser3;

