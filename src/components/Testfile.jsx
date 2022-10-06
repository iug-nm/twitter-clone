import React from "react";

export default function Testfile() {

    function useHref(url, target) {
        let res;
        if (!url) {
            res = target.replace('@', '');
        } else if (!/^(http\https):\/\/www./.test(target)) {
            res = 'https://' + target;
        } else {
            res = target;
        }
        return res;
    }

    return(
        <>
        page de test
        </>
    );
}