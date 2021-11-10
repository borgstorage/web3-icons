#!/bin/bash
set -x
s3cmd put --recursive --no-preserve src/ s3://borg
sleep 1
