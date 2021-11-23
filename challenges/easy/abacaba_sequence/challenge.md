# The ABACABA sequence challenge

## Background

The ABACABA sequence is defined as follows: the first iteration is the first letter of the alphabet (`a`). To form the second iteration, you take the second letter (`b`) and put the first iteration (just `a` in this case) before and after it, to get `aba`. For each subsequent iteration, place a copy of the previous iteration on either side of the next letter of the alphabet.  
Here are the first 5 iterations of the sequence:
```
a
aba
abacaba
abacabadabacaba
abacabadabacabaeabacabadabacaba
```

The 26th and final iteration (i.e. the one that adds the `z`) is 67,108,863 characters long. If you use one byte for each character, this takes up just under 64 megabytes of space.

## Challenge

Write a program to print the 26th iteration of the ABACABA sequence.
If it's easier for you, it's also fine to print one character per line, instead of all the characters on a single line.
Just printing the output can take a few minutes, depending on your setup. Feel free to test it out on something smaller instead, like the 20th iteration, which is only about 1 megabyte.

Source: https://www.reddit.com/r/dailyprogrammer/comments/njxq95/20210524_challenge_391_easy_the_abacaba_sequence/
