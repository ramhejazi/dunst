const { exec } = require("child_process");

function show({ id, content, type, title }) {
    if (typeof this.formatter === "function") content = this.formatter(content);
    let args = ["dunstify"];
    if (type) args.push(`-u ${type}`);
    if (id || this.id) args.push("-r " + (id || this.id));
    args.push(`"${title || this.title}"`);
    content = content.replace(/"/g, '\\"')
    args.push(`"${content}"`);

    exec(args.join(" "), function (e) {
        if (e) {
            console.error(
                `Could not send notification. the error is ${e.message}`
            );
        }
    });
}

function spawn({ id, title, formatter }) {
    return {
        title,
        id,
        formatter,
        spawn: function (args) {
            return Object.assign(this, args);
        },
        show,
    };
}

module.exports = { spawn };
