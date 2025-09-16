# Commit Messages

This lesson focused on why good commit messages matter and how to write them effectively.  

---

## 🔑 Key Points from [cbea.ms/git-commit](https://cbea.ms/git-commit/)

- Separate **subject** (the first line) from the **body** with a blank line.  
- Keep subject lines **short (~50 characters)** but descriptive.  
- Start subject lines with a **capital letter**.  
- Do not end subject lines with a period.  
- Use the **imperative mood** ("Fix bug" instead of "Fixed bug" or "Fixes bug").  
- The body (if needed) should explain **what** and **why**, not **how**.  
- Wrap the body text at ~72 characters per line for readability in CLI tools.  

---

## 🔑 Key Points from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

- Commit messages follow the format:  


- **Types** commonly used:
- `feat:` → a new feature
- `fix:` → a bug fix
- `docs:` → documentation only changes
- `style:` → formatting, white-space, missing semicolons (no logic changes)
- `refactor:` → code changes that neither fix a bug nor add a feature
- `test:` → adding or fixing tests
- `chore:` → changes to build process, tools, or configs
- Scopes (optional) provide more context (e.g., `docs(readme): ...`).  
- Encourages **machine-readable commit history** → useful for automation, changelogs, semantic versioning.  

---

## 📚 Resources to Revisit
- [cbea.ms/git-commit](https://cbea.ms/git-commit/)  
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)  

---

## ✅ Takeaways
- Write clear, consistent commit messages to improve collaboration and history readability.  
- Use **imperative tone** and keep messages concise.  
- Adopt **Conventional Commits** for structured, professional commit logs.  
