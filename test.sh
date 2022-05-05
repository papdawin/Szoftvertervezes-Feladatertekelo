#!/bin/sh

for entry in `ls ./data/*.js`;
do
    `node $entry`&
    sleep 2
    `jest --outputFile=$entry.test.json --json --silent`
    sleep 2
    `kill $(ps -e | grep node | awk '{print $1}')`
done

