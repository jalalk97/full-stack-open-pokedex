#!/usr/bin/env bash

curl -s http://localhost:5000/health | grep -q "ok" || exit 1
