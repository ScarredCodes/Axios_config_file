const response = await api
      .post("/api/todos", {
        title,
        description,
        priority,
        completedTask,
      })
      .then(
        (res) => {
          return res;
        },
        (error) => {
          setError(error.message);
        }
      );

    const json = await response.data;

    if (!response.ok) {
      setError(json.error);
    }

    if (response) {
      setTitle("");
      setDescription("");
      setPriority("");
      setCompletedTask(false);
      setError(null);
      router.push("/");
    }
  };
