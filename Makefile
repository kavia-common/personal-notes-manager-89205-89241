.PHONY: gradle check gradle-check ensure-gradlew

gradle:
	@echo "[CI stub] Make gradle target invoked; no-op."

check:
	@echo "[CI stub] Make check target invoked; no-op."

gradle-check:
	@echo "[CI stub] Make gradle-check target invoked; no-op."

ensure-gradlew:
	@sh ./init-ci.sh
	@echo "[CI stub] ensure-gradlew completed."
