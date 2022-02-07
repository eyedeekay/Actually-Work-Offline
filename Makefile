
# Zip up this directory and its contents into a .zip file.
zip:
	zip -x '*.git*' -r ../awo-zip.zip . 
