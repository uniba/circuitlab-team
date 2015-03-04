
deploy: clean build
	bundle exec middleman deploy
	open http://uniba.jp

server: bundle
	open http://0.0.0.0:4567
	bundle exec middleman server

build: bundle
	bundle exec middleman build --verbose

clean:
	rm -frv publish

bundle:
	ARCHFLAGS=-Wno-error=unused-command-line-argument-hard-error-in-future bundle install --path vendor/bundle

.PHONY: build
