# HSGFE
Death is like a wind.
--------------------

### Repo initial setup:

* Require node and npm

* Install git pre-push hooks:
	+ In /hsgfe :
	```
	./scripts/install-hooks.bash
	```

* npm setup:
	+ In /hsgfe:
	```
	npm install
	```
	
### In repo command:

* Local overall lint test:
   in /hsgfe:
	```
	npm run lint
	```

* Local js lint test:
   in  /hsgfe:
	```
	npm run js-lint
	```

* If there is some js lints, auto fix by using:
   in /hsgfe:
	```
	npm run js-lint-fix
	```

* Local css lint test:
   in /hsgfe:
	```
	npm run css-lint
	```

* If there is some js lints, auto fix by using:
   in /hsgfe:
	```
	npm run css-lint-fix
	```

* Local html lint test:
   in /hsgfe:
	```
	npm run html-lint
	```
