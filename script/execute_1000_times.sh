#!/bin/bash

# Replace the URL with your actual API endpoint
API_URL="http://localhost:3000/api/count"

# Loop to execute the POST request 1000 times
for ((i=1; i<=100; i++)); do
  # Make the POST request using curl in the background
  curl -X POST -H "Content-Type: application/json" -d '{}' "$API_URL" &
done

# Wait for all background processes to finish (optional)
wait
