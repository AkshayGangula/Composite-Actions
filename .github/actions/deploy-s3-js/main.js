const core = require('@actions/core')
// const github = require('@actions/github')
const exec = require('@actions/exec')   
function run() {
    // 1. Get some input vals
    const bucket = core.getInput('bucket', {required: true});
    const bucketRequired = core.getInput('bucket-region', {required: false});
    const distFolder = core.getInput('dist-folder', {required: true});


    // 2. Upload Files
    const s3Uri = `s3://${bucket}`
    exec.exec('aws s3 sync ${distFolder} ${s3Ui} --region ${bucketRegion}');

    core.notice('Hello from my custom javascript action');
}
run();