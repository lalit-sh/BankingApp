build:
	cd backend && $(MAKE) build
	cd database && $(MAKE) build
run:
	docker-compose up