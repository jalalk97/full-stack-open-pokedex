#!/usr/bin/env bash

curl -s http://localhost:5000/health | grep -q "This should fail" || exit 1
