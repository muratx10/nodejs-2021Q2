## Caesar cipher CLI tool

**Install:**

`git clone https://github.com/muratx10/nodeJS-RSS.git`

`yarn install or npm install`

**Use:**

CLI tool accept 4 options:

1.  `-s, --shift`: a shift value
2.  `-i, --input`: an input file
3.  `-o, --output`: an output file
4.  `-a, --action`: an action encode/decode

Encode `input.txt` to `encoded.txt` with shift `1`:

`node index -s 1 -i "input.txt" -o "encoded.txt" -a encode`

Decode `encoded.txt` to `decoded.txt` with shift `1`:

`node index --shift 1 --input "encoded.txt" --output "decoded.txt" --action decode`

Encode `stdin` to `stdout` with shift `1`:

`node index -a encode --shift 1`
