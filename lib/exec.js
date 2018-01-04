module.exports = function (params) {

    const identArr = params.deviceType.identifier.split('-');
    // Check identifier form
    if (identArr.length !== 2 && isNaN(parseInt(identArr[1]))) {
        console.log(`Identifier of deviceType n°${params.deviceType.id}
         in device n°${params.device} invalid.
         Should be IP-GPIO_PIN_NUMBER`);
        return false;
    }

    const command = (param) => gladys.utils.request(`http://
    ${identArr[O]}/control?cmd=GPIO,${identArr[1]},${param}`);

    switch (params.type) {
    case 'binary':
      command(params.state.value)
            .then(console.log)
            .catch(err => {
                console.log(`could not reach ${identArr[0]}.`);
                console.log(err);
            });
        break;

    // no default case abort
    default:
        console.log(`${params.type} not handled by the module for now.`);
        return false;
    }

};