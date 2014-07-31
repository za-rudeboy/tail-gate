tail-gate
=========
tail-gate allows you tail a file that's constantly being updated such as a log file and output the contents to a web browser in real time.
It uses the tail library to tail the file  ***require('tail').Tail*** and the socket.io library websocket implementation ***require('socket.io')(server)***

Usage instructions:

The file path is passed as a program argument. It will start up an HTTP server on port 7001. You can then point your browser to http://localhost:7001 and see the output from the file that you intend to tail.
