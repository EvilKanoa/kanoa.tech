---
date: Oct 19, 2015
title: "Pretty Good Privacy (How to Use PGP)"
author: Kanoa Haley
---

![Picture of keychain](banner_keys.png "Your keys may not actually look like this...")

Do you want to keep your emails private from the government? How about from hackers? Or maybe, you just don’t want a sibling to read them? Whatever the case, be it critical, important, or just for fun, encrypting some, or all, of your emails could be a good idea.

It may seem daunting at first; trying to turn your messages into scrambled code and it somehow ending up as something readable when the recipient decrypts it. It also is quite impressive; even the NSA cannot decrypt end-to-end encryption. But even given all this, it may just seem too complicated for you.

Meet Pretty Good Privacy, also know as PGP, the best encryption program since 1991. PGP allows you to encrypt and decrypt emails, documents, files, and even whole disks! It also allows you to attach a digital signature to your communications to prove each message is actually coming from you, and not somebody else. In essence, PGP allows you to communicate securely with somebody; the benefits are knowing that they are who they say and that nobody else can read your messages.

## How does PGP even work?

The whole premise revolves around everybody having a key. Each key contains two components, a public key and a private key. The public key is the portion that you share with everybody and allows others to send you encrypted messages. The private key is the portion that you can’t let anybody else see! It allows you to decrypt content sent to you and allows you to sign messages that you send.

All that can be extremely confusing at first, so let’s look at a scenario.

## A scenario

Sally and Bob are secretly dating. But, Bob’s younger brother Zeke is a huge snoop and has learned how to sniff the wifi in their house! Zeke is able to intercept Bob’s messages and view them for himself if he wishes (which he obliviously does since he is a younger brother).

Now, Bob knows how invasive his brother can be so he must find a way to hide his and Sally’s love letters back and fourth. Bob decides that he and Sally must start encrypting their communications. Bob and Sally both create their own keys and share their public keys with each other, and verify that they are correct, in person (see note below).

Before they start sending their declarations of love back a fourth, Sally has a grave realization; what if Zeke uses Bob’s email to send her a message and pretends to be Bob by simply using her public key to encrypt her message! Oh no! To prevent this, Bob and Sally must also sign each message with their personal private keys before sending.

Zeke now attempts to figure out what his brother Bob and Sally are saying, but he is stumped. Since Bob uses Sally’s public key to encrypt his emails to her, and signs them with his private key, Zeke cannot read his emails nor can he pretend to be Bob.

Whenever Sally wants to send an email to Bob, she must first compose her message, then encrypt it with Bob’s public key and sign it with her private key. Then, when Bob receives the email, he has to use his private key to decrypt the message, and he uses Sally’s public key to verify her signature. Zeke is totally unable to find any of his brother’s love letters.

Note: To be confident that the public key for somebody is actually their own key, you need to be confident where you got it from. This can be as simple as giving it to them in person, or as complex as building an intricate [Web of Trust](https://en.wikipedia.org/wiki/Web_of_trust) so that you can trust a public key from somebody you do not know in person.

### A scenario: What we learned

- To send an encrypted email to somebody, you need their public key and nothing more.
- To receive an encrypted email, you must use your private key to decrypt it.
- To sign an email with your own signature, you must use your own private key.
- To verify a signature on an email, you must use the senders public key.
- To be confident in your public keys, you must have received them from a trusted source, either in person or by building a [Web of Trust](https://en.wikipedia.org/wiki/Web_of_trust).

## Using PGP: A Tutorial

Now that you understand the theory behind securing your communications, we can walk through how you actually do it in practice.

I’ll be doing this on a Windows machine, but you can follow along fairly easily using other software on other platforms, including the command line.

Here’s the plan:

1. Get the software.
2. Create a key.
3. Sign a document.
4. Verify a signed document.
5. Send an encrypted email.
6. Receive an encrypted email.

### Step One: Get the Software

I use [Gpg4win](http://www.gpg4win.org/), it’s a Windows distribution that contains everything you need. [GPGTools](https://gpgtools.org/) is an OS X distribution that is quite common. Both contain the actual software and a fancy GUI to use it. [GnuPG](https://www.gnupg.org/), what the previous two are based on, runs on nearly all systems (excluding 64 bit Windows), but does not feature a GUI. Pick whichever you like and get it installed.

### Step Two: Create a Key

This part depends nearly entirely on the software you chose before.

If you’re using _Gpg4win_, you need to open _Kleopatra_. This program is where you interact with everything. Go to `File > New Certificate` or press `Ctrl+N`. Then, chose to create an `OpenPGP key pair`. Enter your information. Enter a password you’ll remember. Finally, click `Create Key`.

To export your public key on Windows, head into _Kleopatra_ and select your key in the list. Then, just hit the `Export Certificates` button and chose a location to send the plain-text file.

If you’re using the command line, `gpg –gen-key` will send you in the right direction.

### Step Three: Sign a Document

If you’re using Windows, this is a fairly simple process for a plain-text document. Simply copy your message you want to sign to your clipboard. Then, while in _Kleopatra_, click the `Clipboard` button on the far right and select `OpenPGP-Sign`. At this point, you must chose the identity/key to sign the message with and hit `Next`. After that the new, now signed, message will be copied to your clipboard. Head back to wherever you were writing your email and paste the signed message.

At this point, if you’re on another platform, you can view it’s documentation to figure out what to do. You should still be able to follow this tutorial loosely.

### Step Four: Verify a Signed Document

To verify a signed document, you must have the senders public key imported to whatever software you use. To do this on Windows, you just click the big `Import Certificate` button within _Kleopatra_. If the person gave you their key as text and not a file, copy it to your clipboard, and click `Import Certificate` inside of _Kleopatra’s_ `Clipboard` menu. Otherwise, if not on Windows, just create a new file with their key inside and save it as a `.asc` file and import that.

[Here’s](http://kanoa.ca/wp-content/uploads/KanoaHaley.asc) my public key to practice with. You can even try verifying this quote with it:

```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones. - Albert Einstein
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v2

iQEcBAEBCAAGBQJWGYJtAAoJEAQ6qH0a59vThv0H/0greL4OjZn0vD68Bpk9ksuS
luxJS5wXlpzKadO3eBz4wJ7IJuaBF+xn3/3JbHcyrE3zLp976w9sLWtfXLMTJmVa
wRPZrt1m3Q75XOerAWbwxaRo6lR4BU2zaJCAajxYBs7N0+P+On7/Ggm28NtWd5C4
FlwpslKz+k65R0Ht04Jkv4X4EFWLbYKWqCbAj8V4wOLv31A/Fw4nN3d6CxVa2ZjT
QohwMdslRpIYuJA5UAybebATjq6OXUuxzBYxPieymHdYrLD+A2sZimW6gLcMl1nd
eQsJjtR/LfhyR+y/yxwTzXbt05Ysgtp2fYFWsD3AAIJC8CWoxRm0Vw13+Zkr3+w=
=iSgv
-----END PGP SIGNATURE-----
```

Now, to actually verify a signed message, copy the entire message (from `BEGIN PGP SIGNED MESSAGE` to `END PGP SIGNATURE`) to the clipboard and head on over to _Kleopatra_. Now, go to `Clipboard` and select `Decrypt/Verify` and it’ll let you know whether it’s valid or not. It’ll also copy the plain message to your clipboard.

### Step Five: Send an Encrypted Email

Sending an encrypted email isn’t super hard. Just compose your email, copy it to the clipboard, then click the `Encrypt` option under the `Clipboard` menu in _Kleopatra_. Chose your recipient, and click `Next` to encrypt it. Now return to your email app and paste the encrypted message over the old one and send it away.

You can email me an encrypted message at kanoa@kanoa.ca, but if you want your reply to also be encrypted, you’ll need to send me your public key along with the email.

### Step Six: Recieve an Encrypted Email

Finally, when you receive your first encrypted email, you’ll have to decrypt it to read it. This is actually fairly easy, since whoever sent it to you already has your public key.

Copy the entire message to your clipboard (from `BEGIN PGP MESSAGE` to `END PGP MESSAGE`) and then go over to _Kleopatra_. Click `Decrypt` on the `Clipboard` menu and you’ll have to enter your password. After it finishes, you’ll have the decrypted message copied to your clipboard.

## Stay Secure

Now that you know how to keep your emails and other things private, you just have to remember two simple things to keep it that way. One, don’t ever, ever give out your private key. Two, make sure to build a _Web of Trust_ so that you are confident in the public keys that you have acquired. That’s it! You can stay secure now.
